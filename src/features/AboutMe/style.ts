import { secondary, textColour } from 'constants/styles';

const style = {
  container: {
    background: secondary,
    color: textColour,
    maxWidth: 800,
    textAlign: 'justify',
    padding: 12,
    margin: 24,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    textAlign: 'left',
  },
  content: { display: 'flex', justifyContent: 'center' },
  aweighContainer: { paddingRight: 12 },
} as { [key: string]: React.CSSProperties };

export default style;
