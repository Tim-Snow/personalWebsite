import { secondary, textColour, main } from 'constants/styles';

const style = {
  container: {
    background: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 12,
    margin: 24,
    width: 800,
    minHeight: 820,
  },
  tableContainer: {
    maxHeight: 800,
    overflowY: 'auto',
  },
  column: {
    flex: 1,
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
  },
  spinner: {
    position: 'relative',
  },
} as { [key: string]: React.CSSProperties };

export default style;
