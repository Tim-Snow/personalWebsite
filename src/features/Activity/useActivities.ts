import { useState, useEffect } from 'react';
import useHttpRequest from 'hooks/useFetch';
import toOrdinal from 'libs/toOrdinal';
import { BaseApiState, BaseApiType } from 'types/api';
import { API_BASE } from 'constants/index';

const ACTIVITY_ENDPOINT = `${API_BASE}/events`;

type EventType = 'DeleteEvent' | 'WatchEvent' | 'PushEvent' | 'CreateEvent' | 'IssueCommentEvent' | 'ForkEvent';
export type Activity = {
  id: string;
  created_at: string;
  type: EventType;
  repo: { name: string; url: string };
  payload?: {
    commits: [{ sha: string; message: string; url: string }];
  };
  prettyType: string | undefined;
  prettyCreated: string | undefined;
};

export const EVENT_NAME_MAP: { [key in EventType]: string } = {
  DeleteEvent: 'Deleted',
  WatchEvent: 'Watching',
  PushEvent: 'Pushed to',
  CreateEvent: 'Created',
  IssueCommentEvent: 'Commented on issue',
  ForkEvent: 'Forked',
};

function cleanEventName(activity: Activity) {
  activity.prettyType = EVENT_NAME_MAP[activity.type] || activity.type;
  return activity;
}

function cleanEventTime(activity: Activity) {
  if (activity.created_at) {
    const split = new Date(activity.created_at).toUTCString().split(' ');
    activity.prettyCreated = `${toOrdinal(split[1])} ${split[2]} ${split[3]}`;
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
