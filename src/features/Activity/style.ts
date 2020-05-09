import { secondary, textColour, main } from 'constants/styles';

const style = {
  container: {
    background: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 12,
    margin: 24,
    maxWidth: 800,
    minHeight: 820,
  },
  tableContainer: {
    maxHeight: 800,
    overflowY: 'auto',
  },
  column: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: main,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 3,
    marginBottom: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  spinner: {
    position: 'relative',
  },
} as { [key: string]: React.CSSProperties };

export default style;
