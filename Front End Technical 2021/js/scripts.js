// Write your JS below

$(document).ready(function() {
    console.log('Document ready');
    
    const target = $('#app')[0];
    const config = {
        subtree: false,
        childList: true,
    }

    // Run this first to add img on initial load then check for DOM changes when switching between sign-in, register
    checkBannerImg($(target).children('form'));

    function checkBannerImg(nodeElement) {
        
        if (!$(nodeElement).find('.banner-img').length) {
            let bannerImg = '<img class="banner-img" src="../assets/WSJ_Horizontal.png" alt="WSJ The Future of Everything Brand Logo Image In White Letters And Transparent Background" />';
            $(nodeElement).prepend(bannerImg);
        }
    }
    
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            let newNodes = mutation.addedNodes;
            if (newNodes.length > 0) {
                let nodes = $(newNodes);
                nodes.each(function(key, value) {
                    let node = $(value);
                    if ($(node).hasClass('register-form') || $(node).hasClass('signin-form')) {
                        console.log('Node added!', node);
                        checkBannerImg(node);
                    }
                })
            }
        })
    })
    
    observer.observe(target, config);

});
  