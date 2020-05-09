import { secondary, textColour } from 'constants/styles';

const style = {
  container: {
    backgroundColor: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 10,
    marginTop: 24,
    minHeight: 350,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
  spinner: { position: 'relative', top: 50 },
} as { [key: string]: React.CSSProperties };

export default style;
