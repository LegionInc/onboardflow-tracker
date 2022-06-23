function getCode(conversion = false) {
    let url = 'code_conversion.html'
    if (!conversion) {
        url = 'code.html'
    }
    $.ajax({
        url: url,
        data: null,
        success: function (response) {
            $("#code").html(response)
            hljs.highlightAll()
        },
        dataType: 'html'
    });
}

function custom_event(eventValue, eventMeta) {
    OnboardFlowLoader.triggerCustomEvent(eventValue, eventMeta)
}

function track(settings) {
    var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;
    po.src = `https://media.onboardflow.com/gen/tracker/${settings.site_key}.min.js`;
    po.onload = po.onreadystatechange = function() {var rs = this.readyState; if (rs && rs != 'complete' && rs != 'loaded') return;
    OnboardFlowLoader = new OnboardFlowLoaderClass(); OnboardFlowLoader.identify(window.onboardFlowSettings);};
    var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);
}