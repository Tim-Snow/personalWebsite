import { secondary, textColour } from 'constants/styles';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: secondary,
    color: textColour,
    maxWidth: 785,
    textAlign: 'justify',
    padding: 12,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
    borderRadius: 4,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    textAlign: 'left',
  },
  content: { display: 'flex', justifyContent: 'center' },
  aweighContainer: { paddingRight: 12 },
  center: { textAlign: 'center' },
} as { [key: string]: React.CSSProperties };

export default style;
