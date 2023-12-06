import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeWebView() {
    webview = null;

    handleWebViewNavigationStateChange = (newNavState) => {
        // newNavState looks something like this:
        // {
        //   url?: string;
        //   title?: string;
        //   loading?: boolean;
        //   canGoBack?: boolean;
        //   canGoForward?: boolean;
        // }
        
        const { url } = newNavState;
        if (!url) return;

        if (url.includes("https://walmartglobal.service-now.com/wm_sp")) {
            const newURL = "https://walmartglobal.service-now.com/sn_va_web_client_app_embed.do";
            const redirectTo = 'window.location = "' + newURL + '"';
            this.webview.injectJavaScript(redirectTo);
        }
        
    };

    return <WebView ref={(ref) => (this.webview = ref)} source={{ uri: "https://walmartglobal.service-now.com/sn_va_web_client_login.do?sysparm_redirect_uri=https://walmartglobal.service-now.com/sn_va_web_client_app_embed.do" }} onNavigationStateChange={this.handleWebViewNavigationStateChange} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


