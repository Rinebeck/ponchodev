import DesktopDrawer from './DesktopDrawer'
import MobileDrawer from './MobileDrawer'
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