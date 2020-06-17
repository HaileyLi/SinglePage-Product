$(document).ready(function () {
    dragElement(document.getElementById("dragele"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            setLeft = elmnt.offsetLeft - pos1

            var beforeTxt = document.getElementsByClassName("before-text")
            var afterTxt = document.getElementsByClassName("after-text")

            var beforeEmoji = document.getElementsByClassName("before-emoji")
            var afterEmoji = document.getElementsByClassName("after-emoji")

            var fixedLeft = window.outerWidth / 2 - 300
            var fixedRight = window.outerWidth / 2 + 200

            if (elmnt.offsetLeft - pos1 > fixedRight) {
                setLeft = fixedRight
            } else if (elmnt.offsetLeft - pos1 < fixedLeft) {
                setLeft = fixedLeft
            }

            if (setLeft > window.outerWidth / 2) {
                var textOpacityRight = 1 - Math.abs(setLeft - window.outerWidth / 2) / Math.abs(window.outerWidth / 2 - fixedRight)
                var textOpacityLeft = 1
                var emojiOpacityRight = 0
                var emojiOpacityLeft = Math.abs(setLeft - window.outerWidth / 2) / Math.abs(window.outerWidth / 2 - fixedRight)
            } else {
                var textOpacityRight = 1
                var textOpacityLeft = 1 - Math.abs(setLeft - window.outerWidth / 2) / Math.abs(window.outerWidth / 2 - fixedLeft)
                var emojiOpacityRight = Math.abs(setLeft - window.outerWidth / 2) / Math.abs(window.outerWidth / 2 - fixedLeft)
                var emojiOpacityLeft = 0
            }

            beforeTxt[0].style.opacity = textOpacityLeft
            afterTxt[0].style.opacity = textOpacityRight

            beforeEmoji[0].style.opacity = emojiOpacityLeft
            afterEmoji[0].style.opacity = emojiOpacityRight

            // set the element's new position:
            elmnt.style.left = "calc(50% - " + (window.outerWidth / 2 - setLeft) + "px)"

            var bar = document.getElementById("bar")

            bar.style.left = "calc(50% - " + (window.outerWidth / 2 - setLeft - 50) + "px)"

            var leftPicOverflow = document.getElementsByClassName("overflow-before");
            var rightPicOverflow = document.getElementsByClassName("overflow-after");

            var newsetLeft = bar.offsetLeft

            leftPicOverflow[0].style.width = (630 + (newsetLeft - window.outerWidth / 2) * 2.5) + "px"
            rightPicOverflow[0].style.width = (630 - (newsetLeft - window.outerWidth / 2) * 2.5) + "px"


        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function gotoBefore(e) {

    }
    function gotoAfter(e) {

    }
});