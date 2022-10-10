import '../styles/reset.scss';
import '../styles/global.scss';

import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

function MyApp({Component, pageProps}) {
    return <DevSupport ComponentPreviews={ComponentPreviews}
                       useInitialHook={useInitial}
    >
        <Component {...pageProps} />
    </DevSupport>
}

export default MyApp
