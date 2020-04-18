import { useState, useEffect } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';
import toOrdinal from 'libs/toOrdinal';
import { BaseApiState, BaseApiType } from 'types/api';
import { API_BASE } from 'constants/index';

const ACTIVITY_ENDPOINT = `${API_BASE}/events`;

export type Activity = {
  id: string;
  created_at: string;
  type: string;
  repo: { name: string; url: string };
  payload?: {
    commits: [{ sha: string; message: string; url: string }];
  };
};

export const EVENT_NAME_MAP = {
  DeleteEvent: 'Deleted',
  WatchEvent: 'Watching',
  PushEvent: 'Pushed to',
  CreateEvent: 'Created',
};

function cleanEventName(activity: Activity) {
  activity.type = EVENT_NAME_MAP[activity.type];
  return activity;
}

function cleanEventTime(activity: Activity) {
  if (activity.created_at) {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const split = new Date(activity.created_at).toUTCString().split(' ');
    // eslint-disable-next-line @typescript-eslint/camelcase
    activity.created_at = `${toOrdinal(split[1])} ${split[2]} ${split[3]}`;
  }
  return activity;
}

function cleanEvents(activities: Activity[] | undefined) {
  if (!activities) return [];
  return activities.map((activity) => cleanEventName(cleanEventTime(activity)));
}

export default function useActivities() {
  const [state, setState] = useState<BaseApiType>(BaseApiState.LOAD);
  const [activities, setActivities] = useState<Activity[] | undefined>(undefined);
  const { res, state: requestState } = useHttpRequest<Activity[]>(ACTIVITY_ENDPOINT);

  useEffect(() => {
    if (requestState === BaseApiState.OK && res) {
      setActivities(cleanEvents(res));
    }
    setState(requestState);
  }, [requestState, res]);

  return { activities, state };
}
