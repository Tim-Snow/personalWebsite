import { main, textColour } from 'constants/styles';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: main,
    color: textColour,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    paddingBottom: 12,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  name: {
    fontSize: 54,
    fontWeight: 600,
    color: '#DEDEDE',
  },
} as { [key: string]: React.CSSProperties };

export default style;
