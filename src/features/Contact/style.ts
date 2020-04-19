import { secondary } from 'constants/styles';

const style = {
  container: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    backgroundColor: secondary,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: 5,
  },
  error: {
    textAlign: 'center',
    color: '#F33',
  },
} as { [key: string]: React.CSSProperties };

export default style;
