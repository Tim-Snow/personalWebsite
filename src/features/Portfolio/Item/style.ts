import { secondary, main, textColour } from 'constants/styles';

const style = {
  container: {
    backgroundColor: secondary,
    borderColor: main,
    borderStyle: 'solid',
    borderWidth: 2,
    color: textColour,
    minWidth: 250,
    minHeight: 250,
    margin: 15,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
  } as React.CSSProperties,
};

export default style;
