import { secondary, textColour } from 'constants/styles';

const style = {
  container: {
    background: secondary,
    color: textColour,
    width: 800,
    minHeight: 600,
    textAlign: 'justify',
    padding: 24,
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
