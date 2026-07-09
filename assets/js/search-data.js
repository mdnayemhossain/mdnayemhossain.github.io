// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-skills",
          title: "Skills",
          description: "Technical toolkit across IC layout, verification, simulation, and design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skills/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected layout, IC-mask, and digital-design work - from industry and coursework.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-এপিটাফ",
        
          title: "এপিটাফ",
        
        description: "একটি অসম্পূর্ণ ভালবাসার গল্প",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/epitaph/";
          
        },
      },{id: "post-তন্ময়কে-লেখা-খোলা-চিঠি",
        
          title: "তন্ময়কে লেখা খোলা চিঠি",
        
        description: "এক পুরনো বন্ধুর উদ্দেশ্যে লেখা চিঠি-যেখানে লুকিয়ে আছে কিছু হতাশা ও না বলা তীব্র বেদনা।",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/khola-chithi-tonmoy/";
          
        },
      },{id: "post-ছেলেটা",
        
          title: "ছেলেটা",
        
        description: "জীবনের ঘূর্ণিঝড়ে আটকে পড়া এক ছেলের গল্প",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cheleta/";
          
        },
      },{id: "news-joined-as-an-assistant-engineer-in-ic-mask-design-at-ulkasemi-pvt-limited-dhaka-bd",
          title: 'Joined as an Assistant Engineer in IC Mask Design at Ulkasemi Pvt. Limited,...',
          description: "",
          section: "News",},{id: "news-joined-as-an-analog-layout-design-engineer-at-quest-global-dhaka-bd",
          title: 'Joined as an Analog Layout Design Engineer at Quest Global, Dhaka, BD.',
          description: "",
          section: "News",},{id: "news-started-my-msc-in-electronics-at-the-university-of-oulu-oulu-fi",
          title: 'Started my MSc in Electronics at the University of Oulu, Oulu, FI.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
