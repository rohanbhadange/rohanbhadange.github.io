export type IconKey = "home" | "user" | "projects" | "mail" | "arrow" | "download";
export type TechnologyIconKey = "siemens" | "ansys" | "python" | "pytorch" | "langchain" | "langgraph" | "databricks" | "nvidia" | "ros" | "onnx" | "webrtc" | "yolo" | "ultralytics" | "database" | "layers" | "network" | "tolerance" | "prototype";

export interface NavItem {
  label: string;
  href: string;
  icon: IconKey;
  match: "exact" | "prefix" | "hash";
}

export interface CarouselSlide {
  src: string;
  alt: string;
  label: string;
}

export interface ModelConfig {
  modelUrl: string;
  posterUrl: string;
  label: string;
  caption: string;
  status: string;
  scale: number;
  camera: [number, number, number];
  position: [number, number, number];
  rotationSpeed: number;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspectRatio: `${number}/${number}`;
}

export interface ExperienceEntry {
  id: string;
  phase: string;
  title: string;
  organization: string;
  description: string;
  focus: string[];
}

export interface MasonryImage {
  src: string;
  width: number;
  height: number;
}

export interface ProjectFigure {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
  creditUrl?: string;
  licenseUrl?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectStorySection {
  eyebrow: string;
  title: string;
  body: string[];
  figure?: ProjectFigure;
  figureSide?: "left" | "right";
  equations?: { label: string; expression: string }[];
  technicalDetails?: { label: string; value: string }[];
}

export interface ProjectMediaAsset {
  src: string;
  alt: string;
  caption: string;
  kind: "image" | "video";
  side?: "left" | "right";
}

export interface ProjectCollectionItem {
  id: string;
  title: string;
  discipline: string;
  summary: string[];
  tags: string[];
  figures: ProjectFigure[];
}

export interface ExplosionGroup {
  id: string;
  label: string;
  detail: string;
  nodeNames: string[];
  offset: [number, number, number];
  rotation?: [number, number, number];
  stage: [number, number];
}

export interface ExplodedViewConfig {
  modelUrl: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  camera: [number, number, number];
  explodedCamera: [number, number, number];
  assembledRotation: [number, number, number];
  explodedRotation: [number, number, number];
  scale: number;
  position: [number, number, number];
  frames: CarouselSlide[];
  groups: ExplosionGroup[];
}

export interface SchematicConfig {
  eyebrow: string;
  title: string;
  intro: string;
  viewBox: string;
  paths: { id: string; d: string; label: string }[];
}

export interface Project {
  order: number;
  slug: string;
  title: string;
  discipline: string;
  year: string;
  excerpt: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  vimeoUrl?: string;
  posterUrl?: string;
  mediaAlt: string;
  mediaFit?: "cover" | "contain";
  featured: boolean;
  featuredRank?: number;
  size: "wide" | "standard" | "tall";
  overviewHeading: string;
  overview: string[];
  analysisHeading: string;
  analysis: string[];
  combineIntroSections?: boolean;
  combinedIntroHeading?: string;
  combinedIntroWhy?: string;
  overviewMedia?: ProjectMediaAsset;
  analysisMedia?: ProjectMediaAsset;
  figures: ProjectFigure[];
  metrics?: ProjectMetric[];
  storySections?: ProjectStorySection[];
  collectionItems?: ProjectCollectionItem[];
  headerImage?: ProjectFigure;
  hideIntroSections?: boolean;
  explodedView?: ExplodedViewConfig;
  schematic?: SchematicConfig;
}

export interface PortfolioConfig {
  site: {
    name: string;
    role: string;
    title: string;
    description: string;
    email: string;
    location: string;
    availability: string;
  };
  navigation: NavItem[];
  labels: Record<string, string>;
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    model: ModelConfig;
  };
  about: {
    eyebrow: string;
    title: string;
    previewTitle: string;
    previewBody: string;
    introTitle: string;
    introBody: string[];
    detailTitle: string;
    detailBody: string[];
    firstCarousel: CarouselSlide[];
    secondCarousel: CarouselSlide[];
    galleryTitle: string;
    galleryItems: MasonryImage[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    previewTitle: string;
    previewIntro: string;
    model: ModelConfig;
    items: Project[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    items: GalleryItem[];
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    entries: ExperienceEntry[];
  };
  shader: {
    color: string;
    opacity: number;
    speed: number;
    gridScale: number;
    distortion: number;
  };
  stack: {
    eyebrow: string;
    tools: { name: string; category: string; detail: string; icon: TechnologyIconKey; logoUrl?: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    links: { label: string; href: string }[];
  };
}

const loremShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const portfolio = {
  site: {
    name: "Rohan Bhadange",
    role: "Mechanical Engineering and Computer Science Student",
    title: "Rohan Bhadange",
    description: "Portfolio of Rohan Bhadange, a Mechanical Engineering and Computer Science student at Virginia Tech.",
    email: "rohanbhadange18@gmail.com",
    location: "New York, United States",
    availability: "Available for engineering opportunities",
  },
  navigation: [
    { label: "Home", href: "/", icon: "home", match: "exact" },
    { label: "About", href: "/about", icon: "user", match: "prefix" },
    { label: "Projects", href: "/projects", icon: "projects", match: "prefix" },
    { label: "Contact", href: "/#contact", icon: "mail", match: "hash" },
  ],
  labels: {
    skipToContent: "Skip to content",
    openProject: "Open case study",
    viewAllProjects: "View all engineering projects",
    viewAbout: "Explore the full profile",
    previousSlide: "Previous image",
    nextSlide: "Next image",
    carouselRegion: "Engineering image gallery",
    slideOf: "image",
    projectIndex: "Project index",
    selectedWork: "Selected engineering work",
    details: "Project details",
    mediaFallback: "Your browser does not support embedded video.",
    vimeoTitle: "Embedded project video",
    backToProjects: "Back to projects",
    figures: "Figures and documentation",
    currentPage: "Current page",
    previousProject: "Previous project",
    nextProject: "Next project",
    closeGallery: "Close expanded image",
    galleryRegion: "Field notes image gallery",
    carouselHint: "Drag or use the controls to browse",
    assemblyProgress: "Assembly sequence progress",
    scrollToInspect: "Scroll to inspect the assembly",
    assembledState: "Assembled system",
    explodedState: "Exploded system",
  },
  hero: {
    eyebrow: "",
    headline: "Rohan Bhadange",
    subheading: "Thanks for checking out my portfolio. Whether you're a recruiter, fellow engineer, friend, or stranger, I hope you enjoy.",
    primaryCta: "Explore projects",
    secondaryCta: "About the engineer",
    model: {
      modelUrl: "/models/humanoid-clean.glb",
      posterUrl: "/media/humanoid-poster.png",
      label: "Rotating humanoid engineering model",
      caption: "Humanoid assembly · turntable view",
      status: "",
      scale: 1.18,
      camera: [0.5, 1.3, 5.4],
      position: [-0.02, -1.2, 0],
      rotationSpeed: 0.22,
    },
  },
  about: {
    eyebrow: "About",
    title: "More About Me",
    previewTitle: "Hi!",
    previewBody: "My name is Rohan Bhadange, and I’m currently going into my junior year as a Mechanical Engineering and Computer Science student. Explore my full profile to learn more.",
    introTitle: "",
    introBody: [
      "Hi! My name is Rohan Bhadange, and I am a student studying Mechanical Engineering and Computer Science at Virginia Tech. I’ve had a lot of fun over the last couple of years as a student, working on exciting projects and developing my interests outside the classroom.",
      "Recently, I have been doing more technical work in robotics and AI, but I have also been trying to keep my mechanical design skills sharp. Outside the classroom, I am involved with the Hybrid Electric Vehicle Team (HEVT), which competes in engineering design challenges against other schools. I am also part of a robotics lab working on problems in terrain traversal, networking, and social navigation.",
    ],
    detailTitle: "",
    detailBody: [
      "Work can get a bit monotonous, so whenever I’m not studying, I try to stay active. I am on Virginia Tech’s club teams for alpine ski racing and table tennis, which are both a lot of fun—and take up a lot of time! I also love playing soccer.",
      "Although I am first and foremost an engineering student, one of my dreams is to become a teacher one day. As a result, I have tried to stay active in inspiring a love for STEM in younger students. There are plenty of other things I enjoy and would love to connect over but cannot fit onto this page, so feel free to contact me about anything!",
    ],
    firstCarousel: [
      { src: "/media/about-gallery/about-humanoid-selfie-upright.webp", alt: "Rohan beside a humanoid robot", label: "Robotics Lab" },
      { src: "/media/about-gallery/img-4770.jpg", alt: "Electrical enclosure and high-voltage hardware during vehicle work", label: "Electrical Hardware" },
      { src: "/media/about-gallery/img-4800.jpg", alt: "Vehicle drivetrain and orange high-voltage cabling", label: "Vehicle Systems" },
      { src: "/media/about-gallery/about-tech-components-upright.webp", alt: "Engineering hardware and camera components arranged on a work surface", label: "Hardware Components" },
      { src: "/media/about-gallery/about-humanoid-upright.webp", alt: "Humanoid robot in a robotics workspace", label: "Humanoid Robot" },
      { src: "/media/about-gallery/about-mobile-robot-upright.webp", alt: "Mobile robot platform under development", label: "Mobile Robotics" },
      { src: "/media/about-gallery/about-robot-frame-upright.webp", alt: "Robot frame and sensor hardware during assembly", label: "Robot Assembly" },
    ],
    secondCarousel: [
      { src: "/media/about-gallery/otto-juan.jpg", alt: "Otto Juan tied up during a playful activity", label: "Otto Juan" },
      { src: "/media/about-gallery/rube-goldberg.jpg", alt: "Rube Goldberg machine activity with students", label: "Rube Goldberg" },
      { src: "/media/about-gallery/gallery-10.webp", alt: "Virginia Tech alpine ski team gathered after skiing", label: "Alpine Ski Team" },
      { src: "/media/about-gallery/about-earth-costume.webp", alt: "Rohan dressed in an Earth costume", label: "Planet Earth" },
    ],
    galleryTitle: "A Picture Is Worth a Thousand Words (Dog, Family, Friends, and Adventure)",
    galleryItems: [
      { src: "/media/about-gallery/gallery-11.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-01.webp", width: 1512, height: 2016 },
      { src: "/media/about-gallery/gallery-03.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-02.webp", width: 1800, height: 1350 },
      { src: "/media/about-gallery/gallery-04.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-05.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-06.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-07.webp", width: 1179, height: 1964 },
      { src: "/media/about-gallery/gallery-08.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-09.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-12.webp", width: 1800, height: 1012 },
      { src: "/media/about-gallery/gallery-13.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-14.webp", width: 1800, height: 1350 },
      { src: "/media/about-gallery/gallery-15.webp", width: 1800, height: 1350 },
      { src: "/media/about-gallery/gallery-16.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-17.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-18.webp", width: 1800, height: 1350 },
      { src: "/media/about-gallery/gallery-19.webp", width: 1800, height: 1350 },
      { src: "/media/about-gallery/gallery-20.webp", width: 1170, height: 1560 },
      { src: "/media/about-gallery/gallery-21.webp", width: 1080, height: 1920 },
      { src: "/media/about-gallery/gallery-22-upright.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-23.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-24.webp", width: 1800, height: 2586 },
      { src: "/media/about-gallery/gallery-25-upright.webp", width: 1800, height: 2400 },
      { src: "/media/about-gallery/gallery-26.webp", width: 1800, height: 1458 },
    ],
  },
  projects: {
    eyebrow: "Engineering Projects",
    title: "Selected work across development, controls, simulation, and fabrication.",
    intro: "A closer look at the systems, models, and hardware I have built—and the engineering decisions behind each one.",
    previewTitle: "Selected work",
    previewIntro: "",
    model: {
      modelUrl: "/models/scout-mini.glb",
      posterUrl: "/media/scout-poster.png",
      label: "Rotating Scout robotic platform model",
      caption: "Scout platform · turntable view",
      status: "Platform online",
      scale: 0.92,
      camera: [3.5, 2.5, 4.8],
      position: [0, -0.55, 0],
      rotationSpeed: 0.2,
    },
    items: [
      {
        order: 2,
        slug: "rover-autonomy-simulator",
        title: "Rover Autonomy Simulator",
        discipline: "Controls, Localization & Simulation",
        year: "2026",
        excerpt: "A deterministic 2D rover simulator connecting A* planning, waypoint following, PID control, noisy sensing, EKF localization, mission logic, and telemetry.",
        tags: ["Python", "A* Planning", "PID Control", "EKF", "Pygame", "Telemetry"],
        imageUrl: "/media/projects/rover-autonomy-simulator/autonomy-stack-diagram.png",
        mediaAlt: "Architecture diagram for the rover autonomy simulator",
        mediaFit: "contain",
        featured: true,
        featuredRank: 2,
        size: "standard",
        overviewHeading: "Truth versus belief",
        overview: [
          "A useful autonomy simulator has to distinguish between where a rover actually is and where it believes it is. This project was built around that difference so planning, control, sensing, estimation error, and collision outcomes could be inspected instead of hidden behind a clean animation.",
          "The result is a deterministic 2D test environment that can run headlessly for repeatable experiments or open a live Pygame view with the path, controller state, sensor outputs, mission state, and estimator behavior visible together.",
        ],
        analysisHeading: "A complete autonomy loop",
        analysis: [
          "Occupancy-grid maps feed an inflated-obstacle representation and A* planner. A waypoint follower and PID heading controller convert the path into differential wheel commands, while noisy GPS, IMU, and encoder measurements feed dead reckoning and an EKF pose estimate. Mission logic closes the loop, and structured telemetry records true and estimated behavior so every run can be explained after it finishes.",
        ],
        combineIntroSections: true,
        combinedIntroHeading: "From algorithms to actual systems",
        combinedIntroWhy: "I built these projects to understand the gap between a clean algorithm and a working robot. The simulator gave me a foundation in actual systems: the hard parts are often sensing, timing, estimation, actuator limits, geometry, and failures that are difficult to explain after the fact.",
        storySections: [
          {
            eyebrow: "Mission evidence",
            title: "A success case and a failure case are both useful.",
            body: [
              "The straight-line scenario completes its goal-and-return mission in 17.4 seconds without a collision. Its plots connect rover trajectory, heading error, wheel commands, estimator error, and mission state rather than reducing the result to a single pass label.",
              "The full-mission diagnostic run intentionally exposes a harder truth: a geometrically valid centerline is not automatically safe once rover radius, narrow clearance, sensor noise, and localization error are included.",
            ],
            figure: { src: "/media/projects/rover-autonomy-simulator/success-mission-insights.png", alt: "Successful rover mission plots showing trajectory, heading, wheel commands, and estimator behavior", caption: "Successful run · telemetry connects the planned path to controller and estimator behavior", fit: "contain" },
            figureSide: "right",
          },
          {
            eyebrow: "Failure geometry",
            title: "The collision can be traced to millimeters of real overlap.",
            body: [
              "Comparing the wall position, rover body radius, true pose, and EKF estimate shows why the controller believed the path remained viable while the physical rover envelope crossed the obstacle boundary.",
              "That diagnosis turns the simulator into an engineering tool. The failure suggests concrete changes—greater inflation margin, more conservative clearance checks, or improved estimator confidence handling—instead of an unexplained crash.",
            ],
            figure: { src: "/media/projects/rover-autonomy-simulator/failure-geometry-clearance.png", alt: "Rover clearance failure showing body radius, wall position, true pose, and EKF estimate", caption: "Failure geometry · the estimated path clears the wall while the rover body does not", fit: "contain" },
            figureSide: "left",
          },
        ],
        figures: [],
      },
      {
        order: 1,
        slug: "scout-autonomous-platform",
        title: "Scout Autonomous Platform",
        discipline: "Robotic Systems Engineering",
        year: "2025",
        excerpt: "A Scout Mini platform that brings mechanical integration, perception, streaming, and autonomous navigation into one working system.",
        tags: ["ROS 2", "Sensor Fusion", "Jetson Edge AI", "Gazebo Simulation", "ZED Streaming"],
        imageUrl: "/media/scout-poster.png",
        posterUrl: "/media/scout-poster.png",
        mediaAlt: "Scout autonomous robotic platform",
        featured: true,
        featuredRank: 1,
        size: "standard",
        overviewHeading: "Social perception",
        overview: [
          "The social-perception pipeline starts with an Insta360 equirectangular panorama, detects people with YOLO11n, and uses BoT-SORT to maintain identities over time. A panorama-aware reconciliation layer handles the image seam so one person crossing the left and right edges does not become two tracks.",
          "Velodyne LiDAR measurements are associated with the camera detections and transformed at the correct timestamp into a stable odometry frame. Filtering, duplicate rejection, velocity estimation, and heading estimation turn the raw observations into person tracks that are useful for downstream social-navigation research.",
        ],
        analysisHeading: "ZED camera streaming",
        analysis: [
          "A repeatable streaming path moves ZED imagery from the robot through the ROS camera wrapper and an image-to-RTSP bridge. MediaMTX then exposes low-latency RTSP and browser-friendly WebRTC viewing for local, tunneled, or remote development workflows.",
          "The supporting scripts manage process startup and shutdown, report stream health, surface diagnostics, and capture short rosbag recordings when a failure needs to be reproduced. The goal was to make camera access dependable enough for day-to-day field debugging rather than a fragile one-off demo.",
        ],
        overviewMedia: {
          src: "/media/projects/Scout/innovation_social_analysis.mp4",
          alt: "Social perception detections and identity tracks overlaid on Scout camera footage",
          caption: "Social perception · detection, tracking, and identity reconciliation",
          kind: "video",
          side: "left",
        },
        analysisMedia: {
          src: "/media/projects/Scout/zed2i-official.webp",
          alt: "Stereolabs ZED 2i stereo camera",
          caption: "ZED 2i · stereo depth camera used for streaming and spatial perception",
          kind: "image",
          side: "right",
        },
        storySections: [
          {
            eyebrow: "Gazebo and Nav2",
            title: "Simulation before field deployment.",
            body: [
              "The Scout simulation includes corrected vehicle geometry and wheel axes, ros2_control integration, simulated IMU and LiDAR data, and camera outputs representing the ZED and Insta360 sensors. Gazebo bridges connect the simulated hardware to the same ROS 2 interfaces used by the rest of the stack.",
              "Localization, mapping, goal execution, and waypoint runs are configured through Nav2 with AMCL, Navfn planning, DWB control, costmaps, and velocity smoothing. Route runners add retries and fallback behavior so navigation failures can be investigated systematically before the robot enters a real environment.",
            ],
          },
          {
            eyebrow: "Remote operations",
            title: "Slack-based status and diagnostics.",
            body: [
              "A Slack integration uses the Web API and Socket Mode to report robot status, publish diagnostics, and start or stop approved camera-streaming workflows. It gives the team a lightweight way to inspect the platform when they are not standing beside it.",
              "The interface deliberately excludes motion commands, direct velocity control, navigation goals, and arbitrary shell execution. Command allowlists, rate limiting, and environment-managed credentials keep the convenience layer narrow and operationally safe.",
            ],
          },
        ],
        figures: [
          { src: "/media/scout-poster.png", alt: "Scout robotic platform", caption: "Figure 01 — Integrated platform" },
          { src: "/media/scout-frame-sensors.png", alt: "Scout platform with perception sensors separated from the chassis", caption: "Figure 02 — Perception stack integration", fit: "contain" },
          { src: "/media/projects/Scout/IMG_5941.JPG", alt: "Scout robotic platform photographed in the field", caption: "Figure 03 — Scout in the field" },
        ],
        explodedView: {
          modelUrl: "/models/scout-reconstructed.glb",
          label: "Exploded Scout autonomous platform",
          eyebrow: "Interactive Assembly",
          title: "Inspect the platform from chassis to perception stack.",
          intro: "Move through the assembly to see how compute, perception, communications, structure, and mobility share the platform.",
          camera: [4.2, 2.7, 6.2],
          explodedCamera: [5.6, 3.9, 7.2],
          assembledRotation: [0, 0, 0],
          explodedRotation: [-7, -18, -5],
          scale: 1.05,
          position: [0, -0.9, 0],
          frames: [
            { src: "/media/scout-frame-assembled.png", alt: "Assembled Scout robotic platform", label: "Assembled Platform" },
            { src: "/media/scout-frame-structure.png", alt: "Scout platform with structural panels separated", label: "Structural Separation" },
            { src: "/media/scout-frame-sensors.png", alt: "Scout platform with sensor modules separated", label: "Sensor Separation" },
            { src: "/media/scout-frame-exploded.png", alt: "Fully exploded Scout robotic platform", label: "Exploded System" },
          ],
          groups: [
            { id: "payload-cover", label: "Payload Enclosure", detail: "Blue payload deck and protective electronics enclosure.", nodeNames: ["SCOUT_BLUE_DECK", "SCOUT_ELECTRONICS_ENCLOSURE", "SCOUT_DECK_BRACKET_L", "SCOUT_DECK_BRACKET_R"], offset: [0, 0.82, 0.08], rotation: [2, 0, 0], stage: [0.1, 0.3] },
            { id: "compute", label: "Jetson Compute Bay", detail: "Jetson AGX Orin module and machined carrier beneath the blue deck.", nodeNames: ["SCOUT_JETSON_AGX_ORIN", "SCOUT_JETSON_TRAY"], offset: [-0.72, 0.32, 0.58], rotation: [-8, -10, 0], stage: [0.24, 0.46] },
            { id: "lidar", label: "Velodyne LiDAR", detail: "VLP-16 ranging assembly, optical band, and protective cap.", nodeNames: ["SCOUT_VELODYNE_VLP16", "SCOUT_VELODYNE_OPTICAL_BAND", "SCOUT_VELODYNE_CAP"], offset: [-1.15, 1.05, 0.28], rotation: [0, -18, -4], stage: [0.32, 0.54] },
            { id: "mast", label: "Perception Mast", detail: "Extrusion mast, structural base, and sensor cross-member.", nodeNames: ["SCOUT_MAST", "SCOUT_MAST_BASE", "SCOUT_MAST_CROSSBAR"], offset: [0.68, 0.62, 0.46], rotation: [0, 0, 5], stage: [0.38, 0.6] },
            { id: "stereo", label: "ZED2i Stereo Camera", detail: "Forward stereo camera with independently modeled optical elements.", nodeNames: ["SCOUT_ZED2I"], offset: [-1.18, 1.35, -0.38], rotation: [-5, -12, 0], stage: [0.46, 0.66] },
            { id: "panoramic", label: "Insta360 X4", detail: "Vertical panoramic camera at the top of the perception mast.", nodeNames: ["SCOUT_INSTA360_X4"], offset: [0.9, 1.72, -0.18], rotation: [0, 20, 6], stage: [0.5, 0.7] },
            { id: "communications", label: "Communications", detail: "Paired deck antennas and forward status interface.", nodeNames: ["SCOUT_ANTENNA_L", "SCOUT_ANTENNA_R", "SCOUT_STATUS_BAR"], offset: [1.28, 0.72, 0.16], rotation: [0, 0, 8], stage: [0.54, 0.74] },
            { id: "armor", label: "Exterior Armor", detail: "Front and side protection separated from the load-bearing chassis.", nodeNames: ["SCOUT_SIDE_PANEL_L", "SCOUT_SIDE_PANEL_R", "SCOUT_FRONT_PANEL"], offset: [1.38, 0.08, -0.5], rotation: [0, 0, 7], stage: [0.58, 0.78] },
            { id: "front-mobility", label: "Front Mobility", detail: "Front wheel, hub, linkage, and damper assemblies.", nodeNames: ["SCOUT_WHEEL_FL", "SCOUT_WHEEL_FR", "SCOUT_DAMPER_FL", "SCOUT_DAMPER_FR"], offset: [1.55, -0.18, -1.25], rotation: [0, 0, 8], stage: [0.62, 0.82] },
            { id: "rear-mobility", label: "Rear Mobility", detail: "Rear wheel, hub, linkage, and damper assemblies.", nodeNames: ["SCOUT_WHEEL_RL", "SCOUT_WHEEL_RR", "SCOUT_DAMPER_RL", "SCOUT_DAMPER_RR"], offset: [1.55, -0.18, 1.25], rotation: [0, 0, 8], stage: [0.66, 0.84] },
          ],
        },
        schematic: {
          eyebrow: "Signal Architecture",
          title: "A drawn path from perception to onboard computation.",
          intro: "Stereo cameras and LiDAR feed the onboard compute bay, where perception outputs become information the vehicle can use for control and navigation.",
          viewBox: "0 0 960 420",
          paths: [
            { id: "stereo-path", label: "Stereo Cameras", d: "M90 110 C220 110 220 210 350 210" },
            { id: "lidar-path", label: "LiDAR", d: "M90 310 C220 310 220 210 350 210" },
            { id: "compute-path", label: "Compute Bay", d: "M350 210 L610 210" },
            { id: "control-path", label: "Vehicle Control", d: "M610 210 C750 210 750 120 870 120 M610 210 C750 210 750 300 870 300" },
          ],
        },
      },
      {
        order: 3,
        slug: "hevt-thermal-waiver-pressure-drop-analysis",
        title: "HEVT Thermal Waiver Pressure-Drop Analysis",
        discipline: "Vehicle Thermal Management",
        year: "2026",
        excerpt: "A vehicle-level pressure-drop model comparing a team-added coolant route against the stock GM reference architecture to support an engineering waiver.",
        tags: ["Pressure-Drop Modeling", "Darcy-Weisbach", "Excel", "Thermal Systems", "Vehicle Integration"],
        imageUrl: "/media/projects/hevt-thermal-waiver/image5.png",
        mediaAlt: "HEVT vehicle and coolant architecture showing the team-added thermal path",
        mediaFit: "contain",
        featured: true,
        featuredRank: 3,
        size: "wide",
        overviewHeading: "The waiver question",
        overview: [
          "HEVT added power-electronics and drive-unit cooling hardware to an existing GM thermal architecture. The modified route needed a defensible hydraulic analysis showing that it would not create unacceptable restriction or component pressure conditions.",
          "Instead of treating the loop as an abstract pipe network, the model followed the routed vehicle geometry and compared the team-added path directly against the stock GM reference path.",
        ],
        analysisHeading: "Modeling the routed system",
        analysis: [
          "The pressure-drop calculation combined measured hose lengths, mixed hose diameters, Darcy-Weisbach line losses, minor-loss coefficients, coolant-property assumptions, and available component pressure-drop data. A two-flow-meter validation plan was developed because the credibility of the calculation depended directly on the assumed flow rate.",
          "At the rated condition, the VT path calculated to 26.7 kPa while the GM reference path calculated to 33.1 kPa. The modified route was not over-restrictive; it was approximately 6.36 kPa lower in resistance.",
        ],
        storySections: [
          {
            eyebrow: "Pressure-drop decision",
            title: "The added route was less restrictive than the GM reference.",
            body: [
              "Measured hose, fittings, and component losses were modeled at the 20 °C, 9.712 LPM rated condition. The VT route calculated to 26.7 kPa versus 33.1 kPa for the GM path, so the concern was lower resistance—not excessive restriction.",
              "A roughly 6 kPa restrictor was considered but did not fit the vehicle package. Proposed flow meters would validate the real flow split behind the model inputs.",
            ],
            figure: { src: "/media/projects/hevt-thermal-waiver/image9.jpg", alt: "Vehicle packaging area that constrained the thermal waiver routing", caption: "Vehicle context · packaging ruled out the optional restrictor" },
            figureSide: "right",
            equations: [
              { label: "Governing loss model", expression: "ΔP = [f(L/D) + ΣK] · (ρV²/2)" },
            ],
            technicalDetails: [
              { label: "VT added path", value: "26.7 kPa" },
              { label: "GM reference", value: "33.1 kPa" },
              { label: "Difference", value: "6.36 kPa lower for VT" },
              { label: "Routing loss", value: "5.62 kPa at rated flow" },
            ],
          },
        ],
        figures: [],
      },
      {
        order: 4,
        slug: "stepped-shaft-finite-element-analysis",
        title: "Stepped Shaft Finite Element Analysis",
        discipline: "Mechanical Design & FEA",
        year: "2026",
        excerpt: "A combined bending-and-torsion study using hand calculations, stress-concentration factors, and local mesh convergence to validate the shoulder-fillet response.",
        tags: ["ANSYS Mechanical", "Mesh Convergence", "Stress Concentration", "Hand Calculations"],
        imageUrl: "/media/projects/stepped-shaft-fea/max-von-mises-0p5mm.png",
        mediaAlt: "Von Mises stress result for the stepped shaft with a refined shoulder-fillet mesh",
        mediaFit: "contain",
        featured: false,
        size: "standard",
        overviewHeading: "Combined loading at a geometric discontinuity",
        overview: [
          "The stepped structural-steel shaft was evaluated under a 150 N·m bending moment and a 150 N·m torsional moment. Shoulder fillets introduced the controlling stress concentration, so the analysis had to resolve the local response rather than report only nominal shaft stress.",
          "One end of the shaft was fixed while both moments acted at the free end. Analytical bending and torsional stresses were corrected with stress-concentration factors and combined using the von Mises criterion.",
        ],
        analysisHeading: "Refine where the physics demands it",
        analysis: [
          "The ANSYS Mechanical model used quadratic tetrahedral elements with local sizing at the shoulder fillets. The local mesh was reduced from 2 mm to 0.5 mm while the rest of the model remained comparatively efficient.",
          "Maximum simulated von Mises stress increased from 174.11 MPa at the coarser local mesh to 197.68 MPa at 0.5 mm, converging toward the analytical result of 193.28 MPa.",
        ],
        storySections: [
          {
            eyebrow: "Analytical baseline",
            title: "Stress concentration at the fillet set the target for FEA.",
            body: [
              "The 25 mm shaft section carries the critical shoulder fillet. Nominal bending and torsional stresses were corrected with Kₜ = 1.60 and Kₜₛ = 1.34, then combined with von Mises stress.",
            ],
            equations: [
              { label: "Nominal bending and torsion", expression: "σ₀ = 32M/(πd³)   ·   τ₀ = 16T/(πd³)" },
              { label: "Equivalent stress", expression: "σᵥ = √(σₓ² + 3τₓᵧ²)" },
            ],
            technicalDetails: [
              { label: "Applied loads", value: "150 N·m bending + 150 N·m torsion" },
              { label: "Analytical result", value: "193.28 MPa von Mises" },
              { label: "Material yield", value: "250 MPa structural steel" },
              { label: "Critical region", value: "2.5 mm shoulder fillet" },
            ],
          },
          {
            eyebrow: "Mesh convergence",
            title: "Refinement was concentrated where the stress gradient was highest.",
            body: [
              "Quadratic tetrahedra were locally refined at the fillet from 2.0 mm to 0.5 mm. The peak stress rose toward the analytical value instead of relying on a single mesh result.",
            ],
            technicalDetails: [
              { label: "2.0 mm fillet mesh", value: "174.11 MPa" },
              { label: "1.5 mm fillet mesh", value: "182.10 MPa" },
              { label: "1.0 mm fillet mesh", value: "190.65 MPa" },
              { label: "0.5 mm fillet mesh", value: "197.68 MPa" },
            ],
          },
          {
            eyebrow: "Result",
            title: "The converged model and hand calculation agree on the design conclusion.",
            body: [
              "The refined FEA result differed from the analytical stress by 2.28%. Both values remain below yield, while the strain result confirms that the fillet—not the free end—is the governing stress location.",
              "Maximum displacement was about 0.058 mm at the loaded free end, which is expected for a cantilevered shaft and is distinct from the peak-stress location.",
            ],
            figure: { src: "/media/projects/stepped-shaft-fea/elastic-strain.png", alt: "Elastic strain result showing the shoulder fillet as the highest-response region", caption: "Elastic strain · the fillet remains the governing response region", fit: "contain" },
            figureSide: "left",
            technicalDetails: [
              { label: "Final FEA stress", value: "197.68 MPa" },
              { label: "Analytical difference", value: "2.28%" },
              { label: "Yield check", value: "No yielding at specified loads" },
              { label: "Max displacement", value: "≈ 0.058 mm at free end" },
            ],
          },
        ],
        figures: [],
      },
      {
        order: 5,
        slug: "analytical-and-cfd-pipe-elbow-pressure-loss-study",
        title: "Analytical and CFD Pipe Elbow Pressure-Loss Study",
        discipline: "Internal Flow & CFD",
        year: "2025",
        excerpt: "A Darcy-Weisbach calculation and 3D ANSYS Fluent model compared directly to determine when a simplified pressure-loss model remains defensible.",
        tags: ["ANSYS Fluent", "CFD", "Darcy-Weisbach", "k-ω SST", "Mesh Review"],
        imageUrl: "/media/projects/cfd-pipe-elbow/center-pressure-contour.png",
        mediaAlt: "Center-plane static pressure contour through a ninety-degree pipe elbow",
        mediaFit: "contain",
        featured: false,
        size: "wide",
        overviewHeading: "Test the simplified model",
        overview: [
          "This controlled internal-flow study compared a standard one-dimensional pressure-loss calculation against a full 3D CFD simulation of turbulent flow through a smooth 90-degree elbow.",
          "The goal was not simply to produce a contour. It was to determine whether the simplified model captured the engineering result closely enough and to understand what the CFD solution added beyond a single pressure-drop value.",
        ],
        analysisHeading: "Analytical and numerical methods",
        analysis: [
          "The hand solution used Darcy-Weisbach major losses and a minor-loss coefficient for the elbow. The Fluent model used a steady 3D domain, an unstructured mesh with inflation, and the k-ω SST turbulence model.",
          "Pressure drop was extracted from area-weighted inlet and outlet pressures, while the very small mass-flow imbalance supported confidence in the converged CFD result.",
        ],
        storySections: [
          {
            eyebrow: "Hand model",
            title: "A fast pressure-loss estimate established the baseline.",
            body: [
              "The analytical model combined straight-pipe friction with a 90-degree elbow loss coefficient. It gave a clear benchmark before adding the three-dimensional flow detail that CFD resolves.",
            ],
            equations: [
              { label: "Pressure-loss model", expression: "ΔP = [f(L/D) + K] · (ρV²/2)" },
            ],
            technicalDetails: [
              { label: "Pipe diameter", value: "25.4 mm" },
              { label: "Elbow radius", value: "1.5D" },
              { label: "Model inputs", value: "L = 0.8218 m · K = 0.30 · f = 0.0251" },
              { label: "Hand result", value: "554.6 Pa" },
            ],
          },
          {
            eyebrow: "CFD setup",
            title: "The numerical model resolved the elbow in three dimensions.",
            body: [
              "A steady Fluent model used water at 1 m/s, no-slip walls, and k–ω SST turbulence closure. Inflation layers concentrated resolution near the wall while the full bend geometry captured the local redistribution of flow.",
            ],
            figure: { src: "/media/projects/cfd-pipe-elbow/overall-mesh.png", alt: "Unstructured mesh and inflation layers used for the CFD elbow model", caption: "Mesh review · local wall resolution supports the pressure-loss extraction", fit: "contain" },
            figureSide: "right",
            technicalDetails: [
              { label: "Solver", value: "ANSYS Fluent · steady 3D" },
              { label: "Turbulence model", value: "k–ω SST" },
              { label: "Mesh", value: "245,430 nodes · 662,566 elements" },
              { label: "Mesh review", value: "Maximum skewness = 0.787" },
            ],
          },
          {
            eyebrow: "Validation",
            title: "Mass conservation supported the extracted pressure drop.",
            body: [
              "Area-weighted inlet and outlet pressures gave a CFD result of 558.5 Pa—just 0.71% from the hand calculation. The near-zero mass imbalance supports using that comparison as a numerical check rather than treating a contour alone as validation.",
            ],
            technicalDetails: [
              { label: "CFD pressure drop", value: "558.5 Pa" },
              { label: "Difference from hand model", value: "0.71%" },
              { label: "Mass flow in", value: "0.50361 kg/s" },
              { label: "Mass imbalance", value: "0.00117%" },
            ],
          },
          {
            eyebrow: "Flow field",
            title: "CFD explains the local behavior the scalar model omits.",
            body: [
              "The pressure contour shows the expected reduction through the bend, while the pathlines make the three-dimensional turning flow visible. The simple model was sufficient for total loss at this condition; the simulation supplied the spatial evidence behind it.",
            ],
            figure: { src: "/media/projects/cfd-pipe-elbow/center-pressure-contour.png", alt: "Center-plane static pressure contour through the 90-degree elbow", caption: "Static pressure · a spatial view of the loss represented by the hand model", fit: "contain" },
            figureSide: "left",
          },
        ],
        figures: [],
      },
      {
        order: 6,
        slug: "hevt-vehicle-integration-and-serviceability",
        title: "HEVT Vehicle Integration & Serviceability",
        discipline: "CAD, Fabrication & Vehicle Integration",
        year: "2025",
        excerpt: "Three compact vehicle projects showing how CAD decisions survive packaging, fabrication, installation, field-of-view requirements, and repeated service access.",
        tags: ["CAD", "Fabrication", "Vehicle Packaging", "Serviceability"],
        imageUrl: "/media/projects/hevt-vehicle-integration/camera-mount-line-of-sight-setup.jpg",
        mediaAlt: "HEVT camera placement setup used to evaluate line of sight and vehicle packaging",
        featured: false,
        size: "standard",
        headerImage: {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/69/2023_Cadillac_Lyriq_side.jpg",
          alt: "Side profile of a Cadillac LYRIQ electric SUV in New York City",
          caption: "Cadillac LYRIQ · Photo by DestinationFearFan · CC BY-SA 4.0",
          creditUrl: "https://commons.wikimedia.org/wiki/File:2023_Cadillac_Lyriq_side.jpg",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        },
        hideIntroSections: true,
        overviewHeading: "Small parts, vehicle-level consequences",
        overview: [
          "Student vehicles are full of components that look simple in isolation but become real engineering problems once surrounding geometry, access, vibration, visibility, and fabrication are included.",
          "This collection follows three HEVT projects from design intent into physical context: a rear cover plate, a camera mount, and an iterated hood-release mechanism.",
        ],
        analysisHeading: "Design around the vehicle that already exists",
        analysis: [
          "Each project began with fixed interfaces rather than a blank sheet. The useful work lived in packaging, fastener access, line of sight, mechanism routing, and the practical sequence required to fabricate and install the result.",
          "Together, the projects show a repeatable approach: understand the real interface, build only as much geometry as the problem needs, and close the loop with physical hardware.",
        ],
        figures: [],
        collectionItems: [
          {
            id: "camera-mount",
            title: "Camera Mount Integration",
            discipline: "Packaging and Field of View",
            summary: [
              "We kept breaking halfshafts during vehicle testing and needed a dependable view of the driveline to understand what was happening at the wheel and shaft interfaces. Cameras were added to capture those failures directly.",
              "The mounts had to establish a useful line of sight while remaining rigid, vibration resistant, accessible, and compatible with the surrounding vehicle structure.",
            ],
            tags: ["Sensor Mounting", "Line of Sight", "Packaging", "Fabrication"],
            figures: [
              { src: "/media/projects/hevt-vehicle-integration/camera-mount-line-of-sight-setup.jpg", alt: "Camera placement setup used to evaluate field of view", caption: "Line-of-sight and placement study" },
              { src: "/media/projects/hevt-vehicle-integration/camera-mount-fabrication.jpg", alt: "Fabricated HEVT camera mounting hardware", caption: "Mount translated into hardware" },
              { src: "/media/projects/hevt-vehicle-integration/driver-side-camera-mount.jpg", alt: "Driver-side camera mount installed on the vehicle", caption: "Installed driver-side camera interface" },
            ],
          },
          {
            id: "hood-release",
            title: "Hood Release Iteration",
            discipline: "Mechanism Design and Service Access",
            summary: [
              "Reliable hood access matters throughout vehicle testing, maintenance, and competition preparation. The mechanism had to route through a modified front-end package without sacrificing repeatable actuation or access.",
              "Iteration and fabrication images show the mechanism being refined around real interference and usability constraints instead of treated as a one-shot part.",
            ],
            tags: ["Mechanism Design", "Iteration", "Serviceability", "Vehicle Packaging"],
            figures: [
              { src: "/media/projects/hevt-vehicle-integration/hood-release-iterations.jpg", alt: "Hood-release concepts during mechanical iteration", caption: "Mechanism iteration around packaging constraints" },
              { src: "/media/projects/hevt-vehicle-integration/hood-release-fabrication.jpg", alt: "Fabricated hood-release mechanism", caption: "Fabricated service-access solution" },
            ],
          },
          {
            id: "rear-cover-plate",
            title: "Rear Cover Plate",
            discipline: "CAD to Installed Hardware",
            summary: [
              "Designed, fabricated, and installed a straightforward rear cover plate that fit around the existing hardware and mounting points.",
            ],
            tags: ["CAD", "Fabrication", "Installation"],
            figures: [
              { src: "/media/projects/hevt-vehicle-integration/rear-cover-plate-cad.jpg", alt: "CAD view of the HEVT rear cover plate", caption: "CAD geometry and interface layout", fit: "contain" },
              { src: "/media/projects/hevt-vehicle-integration/rear-cover-plate-fabrication.jpg", alt: "Rear cover plate during fabrication", caption: "Fabricated plate before installation" },
              { src: "/media/projects/hevt-vehicle-integration/rear-cover-plate-installation.jpg", alt: "Rear cover plate installed around vehicle electronics", caption: "Installed result in vehicle context" },
            ],
          },
        ],
      },
      {
        order: 7,
        slug: "hevt-packaging-protection-and-interfaces",
        title: "HEVT Packaging, Protection & Interfaces",
        discipline: "Subsystem Packaging & Reliability",
        year: "2025",
        excerpt: "A collection of driveline, protective-cover, and driver-interface projects shaped by articulation, fixed vehicle geometry, electronics packaging, and installability.",
        tags: ["CAD", "Driveline Packaging", "Electronics Housing", "Additive Manufacturing"],
        imageUrl: "/media/projects/hevt-packaging-interfaces/cascadia-cap-trunk-hole-location.jpg",
        mediaAlt: "Vehicle-context view of the fixed geometry surrounding the Cascadia cap",
        featured: false,
        size: "wide",
        overviewHeading: "Design the interfaces around the hardware",
        overview: [
          "Protective and interface components quietly determine whether a subsystem is durable, serviceable, and usable. They have to follow geometry they do not control while still providing clearance, access, and clean integration.",
          "This collection brings together driveline boot packaging, a compact Cascadia cover, and a fabricated TTD display housing.",
        ],
        analysisHeading: "Three different forms of packaging",
        analysis: [
          "The joint boot is governed by motion and protection, the Cascadia cap by fixed geometry and coverage, and the TTD housing by electronics, screen placement, trim fit, and driver interaction.",
          "Their common thread is interface design: understanding the space around the primary hardware and creating a purpose-built part that makes the larger system work better.",
        ],
        figures: [],
        collectionItems: [
          {
            id: "joint-boot",
            title: "Joint Boot Design",
            discipline: "Driveline Packaging and Reliability",
            summary: [
              "Boot fitment cannot be evaluated from a static envelope alone. Articulation, plunge, nearby hardware, and the flexible boot profile all affect clearance and long-term protection.",
              "The work treated the boot and surrounding package as a reliability problem, balancing motion clearance with protection from debris and interference.",
            ],
            tags: ["Driveline", "Articulation", "Clearance", "Reliability"],
            figures: [
              { src: "/media/projects/hevt-packaging-interfaces/cv-volvo-spline-gm-joint.jpg", alt: "Volvo boot with the GM shaft incorporated into the HEVT joint package", caption: "Joint and boot packaging reference" },
            ],
          },
          {
            id: "cascadia-cap",
            title: "Cascadia Cap",
            discipline: "Protective Cover and Subsystem Fitment",
            summary: [
              "The cap had to work around fixed subsystem geometry rather than an idealized volume. Coverage, clearance, installation, and removal all shaped the compact custom part.",
              "The result demonstrates how a small cover can improve protection, cleanliness, and serviceability across a larger assembly.",
            ],
            tags: ["Protective Cover", "Fitment", "Clearance", "Service Access"],
            figures: [
              { src: "/media/projects/hevt-packaging-interfaces/cascadia-cap-trunk-hole-location.jpg", alt: "Vehicle-context view of the geometry surrounding the Cascadia cap", caption: "Fixed vehicle geometry driving the design" },
              { src: "/media/projects/hevt-packaging-interfaces/cascadia-cap-1.jpg", alt: "Cascadia cap component in isolation", caption: "Compact protective-cover concept" },
            ],
          },
          {
            id: "ttd-housing",
            title: "TTD Display Housing",
            discipline: "Electronics Packaging and Driver Interface",
            summary: [
              "The display housing had to place a screen and supporting electronics within the existing center-console geometry while remaining practical to fabricate, assemble, and install.",
              "The project moved from CAD layout to a purpose-built physical housing, resolving the electronics cavity, screen opening, surrounding trim fit, and access for assembly hardware.",
            ],
            tags: ["CAD", "Electronics Packaging", "3D Printing", "Driver Interface"],
            figures: [
              { src: "/media/projects/hevt-packaging-interfaces/ttd-cad.jpg", alt: "CAD development view of the TTD display housing", caption: "Housing geometry and interface development", fit: "contain" },
              { src: "/media/projects/hevt-packaging-interfaces/ttd-fabrication.jpg", alt: "Fabricated TTD housing, internal electronics, and installed display", caption: "CAD-to-hardware result" },
            ],
          },
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Field Notes",
    title: "Experiments, details, and the work around the work.",
    intro: loremShort,
    items: [
      { id: "field-cad", src: "/media/cad-assembly.svg", alt: "Exploded engineering assembly placeholder", caption: "Assembly study", aspectRatio: "4/5" },
      { id: "field-airfoil", src: "/media/airfoil-analysis.svg", alt: "Aerodynamic analysis placeholder", caption: "Flow study", aspectRatio: "3/2" },
      { id: "field-fixture", src: "/media/fixture-detail.svg", alt: "Manufacturing fixture placeholder", caption: "Fixture detail", aspectRatio: "4/5" },
      { id: "field-robot", src: "/media/robotic-system.svg", alt: "Robotic platform placeholder", caption: "Robotic system", aspectRatio: "1/1" },
      { id: "field-thermal", src: "/media/thermal-analysis.svg", alt: "Thermal simulation placeholder", caption: "Thermal field", aspectRatio: "4/5" },
      { id: "field-test", src: "/media/test-rig.svg", alt: "Engineering test rig placeholder", caption: "Test and validation", aspectRatio: "3/2" },
      { id: "field-cad-two", src: "/media/cad-assembly.svg", alt: "Mechanical assembly documentation placeholder", caption: "Design documentation", aspectRatio: "2/3" },
      { id: "field-robot-two", src: "/media/robotic-system.svg", alt: "Robotics development placeholder", caption: "Development frame", aspectRatio: "5/4" },
    ],
  },
  experience: {
    eyebrow: "",
    title: "Experience",
    intro: "What I’ve been up to.",
    entries: [
      {
        id: "robotics-research",
        phase: "Research",
        title: "Robotics Researcher",
        organization: "Virginia Tech Robotics Lab",
        description: "Building perception and autonomy tools across terrain traversal, social perception, camera streaming, and navigation, and then testing them in simulation before they reach the field.",
        focus: ["Perception", "Autonomy", "Simulation"],
      },
      {
        id: "medtronic-ai-engineering",
        phase: "Industry",
        title: "Medtronic AI Engineering Intern",
        organization: "Medtronic",
        description: "Designed and deployed supervisor-structured multi-agent AI systems with Databricks so company personnel could talk to and query data in natural language.",
        focus: ["Multi-Agent AI", "Databricks", "Natural Language Data"],
      },
      {
        id: "afosr",
        phase: "Research",
        title: "Air Force Office of Scientific Research (AFOSR)",
        organization: "AFOSR",
        description: "Developed a RAG-based, high-accuracy semantic search system for compliance documents to support parts of manual policy review.",
        focus: ["RAG", "Semantic Search", "Compliance Documents"],
      },
      {
        id: "stem-camp-counselor",
        phase: "Education",
        title: "STEM Camp Counselor",
        organization: "STEM Camp",
        description: "Staying active in inspiring a love for STEM in younger students by designing and implementing fun curricula.",
        focus: ["Curriculum Design", "STEM Education", "Mentorship"],
      },
    ],
  },
  shader: {
    color: "#38bdf8",
    opacity: 0.28,
    speed: 1.335,
    gridScale: 11,
    distortion: 0.055,
  },
  stack: {
    eyebrow: "Tech Stack & Software",
    tools: [
      { name: "SolidWorks", category: "Mechanical CAD", detail: "CAD Modeling · Assemblies · Drawings", icon: "prototype", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/SOLIDWORKS_Logo.svg" },
      { name: "Siemens NX", category: "Mechanical CAD", detail: "Parametric Design · Assemblies · Drafting", icon: "siemens" },
      { name: "ANSYS", category: "Engineering Simulation", detail: "FEA · CFD · Thermal Analysis", icon: "ansys" },
      { name: "MATLAB", category: "Technical Computing", detail: "Modeling · Controls · Data Analysis", icon: "network", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
      { name: "GD&T", category: "Design Definition", detail: "Datums · Tolerances · Inspection", icon: "tolerance" },
      { name: "3D Slicing", category: "Additive Manufacturing", detail: "Print Preparation · Supports · Toolpaths", icon: "layers" },
      { name: "Python", category: "Engineering Software", detail: "Automation · Optimization · Visualization", icon: "python" },
      { name: "SQL", category: "Data Systems", detail: "Queries · Modeling · Analysis", icon: "database" },
      { name: "PyTorch", category: "Machine Learning", detail: "Modeling · Training · Inference", icon: "pytorch" },
      { name: "LangChain", category: "AI Engineering", detail: "Agents · Tools · Orchestration", icon: "langchain" },
      { name: "LangGraph", category: "AI Engineering", detail: "Stateful Agents · Workflows · Control", icon: "langgraph" },
      { name: "Retrieval-Augmented Generation (RAG)", category: "AI Systems", detail: "Retrieval · Context · Generation", icon: "network" },
      { name: "AWS", category: "Cloud Infrastructure", detail: "Compute · Storage · Deployment", icon: "network", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Databricks", category: "Data and AI Platform", detail: "Pipelines · Analytics · Machine Learning", icon: "databricks" },
      { name: "ROS 2", category: "Robotics Middleware", detail: "Perception · Navigation · Hardware Interfaces", icon: "ros" },
      { name: "Gazebo", category: "Robot Simulation", detail: "Worlds · Sensors · Physics Validation", icon: "prototype" },
      { name: "YOLO", category: "Computer Vision", detail: "Person Detection · Real-Time Inference", icon: "yolo" },
      { name: "BoT-SORT", category: "Multi-Object Tracking", detail: "Identity Tracking · Re-Identification", icon: "network" },
      { name: "ONNX", category: "Model Deployment", detail: "Portable Graphs · Edge Inference", icon: "onnx" },
      { name: "TensorRT", category: "Edge AI Runtime", detail: "FP16 Optimization · Jetson Inference", icon: "layers" },
      { name: "NVIDIA Jetson", category: "Edge Computing", detail: "CUDA · Onboard Robotics Compute", icon: "nvidia" },
      { name: "ZED SDK", category: "3D Perception", detail: "Stereo Depth · Spatial Sensing", icon: "prototype" },
      { name: "WebRTC", category: "Robot Teleoperation", detail: "Low-Latency Video · Remote Monitoring", icon: "webrtc" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s Talk",
    body: "If you have any questions or want to get in touch let me know!",
    emailLabel: "Send an email",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rohan-bhadange-696a35235/" },
      { label: "GitHub", href: "https://github.com/rohanbhadange" },
      { label: "Resume", href: "/resume.pdf" },
    ],
  },
} satisfies PortfolioConfig;

export function getProject(slug: string): Project | undefined {
  return portfolio.projects.items.find((project) => project.slug === slug);
}
