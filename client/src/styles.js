import { makeStyles } from "@material-ui/core/styles";
import background from "./images/background.jpg";

export default makeStyles( () => ({
    appBar: {
        borderRadius: 0,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      backgroundImage: {
        backgroundImage: `url(${background})`,
        width: '100px',
        height: '100px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    
}))