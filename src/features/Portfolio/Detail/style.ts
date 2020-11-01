const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    textTransform: 'capitalize',
    alignSelf: 'center',
    flex: 1,
    width: 700,
  },
  details: {
    margin: 10,
    maxWidth: 600,
  },
  icon: { width: 24 },
  image: {
    maxHeight: 700,
    maxWidth: 600,
    overflow: 'hidden',
  },
  arrow: {
    cursor: 'pointer',
    fontSize: 24,
    userSelect: 'none',
  },
} as { [key: string]: React.CSSProperties };

export default style;
