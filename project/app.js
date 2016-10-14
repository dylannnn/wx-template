const PersonalMgr = require('./manager/PersonalMgr.js');
const GET = require('./utils/net/get.js');

App({
    data: {},
    Page(options) {
        const {onLoad, onUnload} = options;
        options.onLoad = function() {
            var app = getApp();
            this.props = app.passProps;
            app.navigator.routeStack.push(this);
            onLoad && onLoad.bind(this)();
        };
        options.onUnload = function() {
            var app = getApp();
            onUnload && onUnload.bind(this)();
            app.navigator.routeStack.pop();
        };
        return Page(options);
    },
    navigator: {
        push(obj) {
            getApp().passProps = obj.passProps;
            wx.navigateTo({url: obj.url});
        },
        replace() {
            getApp().passProps = obj.passProps;
            wx.redirectTo({url: obj.url});
        },
        pop() {
            wx.navigateBack();
        },
        routeStack: [],
        getCurrentRoutes() {
            return this.routeStack;
        },
        getCurrentRoute() {
            return this.routeStack[this.routeStack.length-1];
        },
        getParentRoute(i=1) {
            return this.routeStack[this.routeStack.length-1-i];
        },
    },
    GET: GET,
    showWait() {
    },
    hideWait() {
    },
    Toast(msg) {
        console.log(msg);
    },
    personal:new PersonalMgr(),
    onLaunch() {
        wx.getSystemInfo({
            success: (res) => {
                this.system = res;
            }
        })
    },
})
