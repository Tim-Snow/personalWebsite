import { secondary, textColour, main } from 'constants/styles';

const style = {
  container: {
    background: secondary,
    color: textColour,
    textAlign: 'center',
    padding: 32,
    margin: 24,
    borderRadius: 4,
  },
  tableContainer: {
    maxHeight: 1050,
    overflowY: 'auto',
  },
  column: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 11,
    paddingRight: 11,
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
