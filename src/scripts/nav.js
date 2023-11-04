function showNav()
        {
            document.getElementById("content")?.classList.add("hidden");
            var nav = document.getElementById("smallNav");

            if(nav?.classList.contains("hidden"))
            {
                nav?.classList.remove("hidden");
                nav?.classList.add("flex");
            }

            document.getElementById("navBtnShow")?.classList.add("hidden");
            document.getElementById("navBtnHide")?.classList.remove("hidden");
        }
        function hideNavAll()
        {
            document.getElementById("content")?.classList.remove("hidden");

            var nav = document.getElementById("smallNav");
            if(nav?.classList.contains("flex"))
            {
                nav?.classList.remove("flex");
                nav?.classList.add("hidden");
            }

            var saa = document.getElementById("servicesAndAccesories");
            if(saa?.classList.contains("flex"))
            {
                saa?.classList.remove("flex");
                saa?.classList.add("hidden");
            }

            var cm = document.getElementById("contactMINI");
            if(cm?.classList.contains("flex"))
            {
                cm?.classList.remove("flex");
                cm?.classList.add("hidden");
            }

            document.getElementById("navBtnShow")?.classList.remove("hidden");
            document.getElementById("navBtnHide")?.classList.add("hidden");
        }
        function showServicesAndAccesories()
        {
            var nav = document.getElementById("smallNav");
            if(nav?.classList.contains("flex"))
            {
                nav?.classList.remove("flex");
                nav?.classList.add("hidden");
            }

            var content = document.getElementById("content");
            if(!content?.classList.contains("hidden"))
            {
                content?.classList.add("hidden");
            }

            var cm = document.getElementById("contactMINI");
            if(cm?.classList.contains("flex"))
            {
                cm?.classList.remove("flex");
                cm?.classList.add("hidden");
            }

            var saa = document.getElementById("servicesAndAccesories");
            if(saa?.classList.contains("hidden"))
            {
                saa?.classList.remove("hidden");
                saa?.classList.add("flex");
            }
            else
            {
                saa?.classList.remove("flex");
                saa?.classList.add("hidden");
                content?.classList.remove("hidden");
            }
        }
        function showContactMini()
        {
            var nav = document.getElementById("smallNav");
            if(nav?.classList.contains("flex"))
            {
                nav?.classList.remove("flex");
                nav?.classList.add("hidden");
            }

            var content = document.getElementById("content");
            if(!content?.classList.contains("hidden"))
            {
                content?.classList.add("hidden");
            }

            var saa = document.getElementById("servicesAndAccesories");
            if(saa?.classList.contains("flex"))
            {
                saa?.classList.remove("flex");
                saa?.classList.add("hidden");
            }

            var cm = document.getElementById("contactMINI");
            if(cm?.classList.contains("hidden"))
            {
                cm?.classList.remove("hidden");
                cm?.classList.add("flex");
            }
            else
            {
                cm?.classList.remove("flex");
                cm?.classList.add("hidden");
                content?.classList.remove("hidden");
            }
        }