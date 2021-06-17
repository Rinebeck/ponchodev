import DesktopDrawer from '../components/DesktopDrawer'
import MobileDrawer from '../components/MobileDrawer'
import Hidden from '@material-ui/core/Hidden'


export default function Navigation() {
    return (
        <>
            <Hidden smDown>
                <DesktopDrawer></DesktopDrawer>
            </Hidden>
            <Hidden mdUp>
                <MobileDrawer></MobileDrawer>
            </Hidden>
        </>
    )
}