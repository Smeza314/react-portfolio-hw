import "../../Footer.css";
import CopyrightIcon from '@material-ui/icons/Copyright'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: 'none',
    color: '#f50057',
    marginTop: 6,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
      <footer className="footer">
        <Typography variant='body1' className={classes.title}>
          <CopyrightIcon style={{ fontSize: 12 }} /> Footer
        </Typography>
      </footer>
  )
} 

export default Footer