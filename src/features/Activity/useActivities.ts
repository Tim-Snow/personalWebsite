import { useState, useEffect } from 'react';
import useHttpRequest from 'hooks/useHttpRequest';
import toOrdinal from 'libs/toOrdinal';

const ACTIVITY_ENDPOINT = '/users/tim-snow/events';

type ActivityState = 'load' | 'ok' | 'ko';

export type Activity = {
  id: string;
  created_at: string;
  type: string;
  repo: { name: string; url: string };
  payload?: {
    commits: [{ sha: string; message: string; url: string }];
  };
};

function cleanEventName(activity: Activity) {
  switch (activity.type) {
    case 'WatchEvent':
      activity.type = 'Watching';
      break;
    case 'PushEvent':
      activity.type = 'Pushed to';
      break;
    case 'CreateEvent':
      activity.type = 'Created';
      break;
    default:
      break;
  }
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
  const [state, setState] = useState<ActivityState>('load');
  const [activities, setActivities] = useState<Activity[] | undefined>(undefined);
  const { res, state: requestState } = useHttpRequest<Activity[]>(ACTIVITY_ENDPOINT);

  useEffect(() => {
    if (requestState === 'ok') {
      setState(requestState);
      setActivities(cleanEvents(res));
    }
    if (requestState === 'ko') {
      setState('ko');
    }
  }, [requestState, res]);

  return { activities, state };
}
