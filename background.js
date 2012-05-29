window.addEventListener("load", function(){
    var button;
    var UIItemProperties = {
        disabled: false,
        title: titlePopup,
        icon: "icons/qrcode_mini.png",
        popup: {
            href: "popup.html",
            width: 300,
            height: 300
        }
    }
    button = opera.contexts.toolbar.createItem(UIItemProperties);
    opera.contexts.toolbar.addItem(button);

    opera.extension.onconnect = function(event) {
        var thisTab = opera.extension.tabs.getFocused();
        event.source.postMessage({
            url:         thisTab.url, 
            textLoading: loading,
            textReload:  reload,
            textDownload: download
        });
    };

}, false);