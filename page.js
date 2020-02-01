 function popupwindow(url, title, w, h) {
        wLeft = window.screenLeft ? window.screenLeft : window.screenX;
        wTop = window.screenTop ? window.screenTop : window.screenY;

        var left = wLeft + (window.innerWidth / 2) - (w / 2);
        var top = wTop + (window.innerHeight / 2) - (h / 2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    }
      $(document).ready(function () {
        $(".navbar-nav li a").click(function (e) {
          e.preventDefault();
          $("#tablet").toggleClass("move");
          $("#wifi").toggleClass("move");

        });
        
        $('#share_facebook').click(function () {
          var shareUrl = "http://www.facebook.com/sharer/sharer.php?u=https://www.google.com";
          popupwindow(shareUrl, 'Facebook', 600, 500);

        })
        $('#share_twitter').click(function () {
          var shareUrl = "https://twitter.com/intent/tweet?original_referer=http://www.microvolts.com/&text=MicroVolts%20Surge%20-%20Online%20Toy%20Shooter&tw_p=tweetbutton&url=https://www.google.com";

          popupwindow(shareUrl, 'Twitter', 600, 500);

        })
        $('#share_gmail').click(function () {
          var shareUrl = "https://plus.google.com/share?url=https://www.youtube.com";
          
          popupwindow(shareUrl, 'G+', 600, 500);

        })
        
      });

      