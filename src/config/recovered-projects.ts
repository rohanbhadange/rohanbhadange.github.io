import type { Project } from "./portfolio";
export const recoveredProjects: Project[] = [
  {
    "order": 8,
    "slug": "rtx-drone-integration",
    "title": "RTX AVC Drone Integration",
    "discipline": "Robotics / Mechanical Integration",
    "year": "2026",
    "excerpt": "An evolving UAV packaging study connecting the frame, sensing, compute, power distribution, and gripper interfaces.",
    "tags": [
      "SolidWorks",
      "UAV",
      "Packaging",
      "Design iteration"
    ],
    "imageUrl": "/projects/recovered/rtx-drone.webp",
    "mediaAlt": "RTX AVC Drone Integration \u2014 project evidence",
    "mediaFit": "contain",
    "featured": true,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "The RTX AVC drone project brings mechanical packaging and subsystem interfaces into one editable assembly. The work spans the frame, sensor placement, battery restraint, compute stack, and an internal power cassette.",
      "The case study follows the current R3.2 packaging configuration and its preserved revisions. Manufacturer geometry and purchased electronics are integration references; the custom packaging is the design work."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "The assembly uses configuration-specific parts and mates so a new integration can be compared with a preserved baseline. The latest reviewed checkpoint installs the internal power cassette while retaining the earlier configuration.",
      "This is an engineering CAD prototype. Physical retention, full-aircraft mass and center of gravity, thermal behavior, vibration, wiring access, and flight qualification remain open."
    ],
    "storySections": [
      {
        "eyebrow": "Integration",
        "title": "A power cassette gives the electronics a defined place.",
        "body": [
          "The cassette groups the power distribution board, regulator, motor controller, and UBEC around a shared mounting structure. Three frame-datum mates locate the module, while configuration-specific changes preserve the previous layout.",
          "The recorded reopen check verified the saved main assembly and module placement. That check establishes persistence of the modeled integration; it does not establish completed aircraft packaging."
        ],
        "figure": {
          "src": "/projects/recovered/rtx-power-layout.webp",
          "alt": "Top view of the current drone power-cassette integration",
          "caption": "C122 CAD checkpoint. Some electronics and retention hardware are approximations.",
          "fit": "contain"
        },
        "figureSide": "left",
        "technicalDetails": [
          {
            "label": "Frame gap",
            "value": "75 mm"
          },
          {
            "label": "Current state",
            "value": "R3.2 power cassette \u2014 work in progress"
          }
        ]
      },
      {
        "eyebrow": "Design process",
        "title": "Keep alternatives traceable.",
        "body": [
          "The retained frame checkpoints, component sources, and change logs make it possible to trace a packaging decision back to its geometry and constraints. Suppressed alternatives remain available for comparison.",
          "Next steps include closing compute fastening, cable and connector access, battery retention, interference checks, and the measured mass budget before physical qualification."
        ]
      }
    ],
    "figures": [],
    "featuredRank": 2
  },
  {
    "order": 9,
    "slug": "gripper-linkage-development",
    "title": "Gripper Linkage Development",
    "discipline": "Mechanism Design / CAD Verification",
    "year": "2026",
    "excerpt": "A servo-to-carriage linkage developed from measured interfaces, then checked through native geometry, exports, and motion sweeps.",
    "tags": [
      "SolidWorks",
      "Linkages",
      "Parametric CAD",
      "Mechanisms"
    ],
    "imageUrl": "/projects/recovered/servo-linkage.webp",
    "mediaAlt": "Gripper Linkage Development \u2014 project evidence",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "This mechanism study connects an existing servo hub to opposed gripper carriages. The link geometry was derived from the actual pivot axes rather than a sketch of the intended arrangement.",
      "A separate test assembly preserved the source assembly and used two references to the same editable link part. This servo-linkage iteration is distinct from the later worm-gripper architecture in the drone."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "The final part uses a shared thickness and pivot-spacing parameter, fully defined sketches, and rounded pad-to-body transitions. Native geometry was compared with STEP and STL exports.",
      "The design is a geometrically checked prototype. Printed material properties, loaded clearances, fastener packaging, fatigue, and gripping force were not qualified by these CAD checks."
    ],
    "storySections": [
      {
        "eyebrow": "Part definition",
        "title": "One part, two mirrored functions.",
        "body": [
          "A 61.1875 mm pivot spacing connects the measured servo and carriage interfaces. The 3 mm body and 12 mm pivot pads carry two 4.3 mm through holes.",
          "The exported STL had no boundary or nonmanifold edges and its volume was within 0.05% of the native solid. This checks export fidelity, not structural capacity."
        ],
        "figure": {
          "src": "/projects/recovered/servo-link.webp",
          "alt": "Parametric servo-to-carriage link",
          "caption": "Native link part from the October 13 verification package.",
          "fit": "contain"
        },
        "figureSide": "left",
        "technicalDetails": [
          {
            "label": "Pivot spacing",
            "value": "61.1875 mm"
          },
          {
            "label": "Link thickness",
            "value": "3 mm"
          },
          {
            "label": "Native solid volume",
            "value": "1,789.685 mm\u00b3"
          }
        ]
      },
      {
        "eyebrow": "Iteration",
        "title": "Motion checks expose the limits.",
        "body": [
          "The preserved motion sweeps and closing-boundary refinement document where the tested geometry can travel. They keep a successful static pose from becoming an unsupported claim about the whole mechanism.",
          "Later worm-drive studies remain a separate design branch with their own contact, spring, thrust-path, and self-locking questions."
        ]
      }
    ],
    "figures": []
  },
  {
    "order": 10,
    "slug": "isame-camera-integration",
    "title": "ISAME Motion Systems and Enclosure",
    "discipline": "Mechanical Systems / Motion / Enclosure Design",
    "year": "2026",
    "excerpt": "Mechanical-system development for ISAME, with primary focus on motion systems and enclosure design, alongside base-plate, mounting, and camera integration work.",
    "tags": [
      "SolidWorks",
      "Motion systems",
      "Enclosure design",
      "Mechanical integration"
    ],
    "imageUrl": "/projects/recovered/isame-corner-bracket.webp",
    "mediaAlt": "Camera bracket developed as one part of the wider ISAME mechanical-system work",
    "mediaFit": "contain",
    "featured": true,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "My ISAME work spans the mechanical system, with primary focus on motion systems and enclosure design. The work also includes base-plate concepts, structural interfaces, mounting hardware, and camera integration.",
      "The project connects moving hardware with the structure and enclosure around it. The camera bracket shown here is one component within that broader system."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "I consider how motion-system interfaces, structural framing, enclosure geometry, and supporting hardware fit together, including assembly access, packaging, and serviceability.",
      "Detailed checks are tied to specific component revisions. The camera-mount geometry and fit checks below describe that subsystem; they do not establish whole-machine motion performance or enclosure qualification."
    ],
    "storySections": [
      {
        "eyebrow": "Motion systems",
        "title": "Motion systems within the mechanical assembly.",
        "body": [
          "Motion-system work is a primary part of my contribution to ISAME. It is considered together with the structure and enclosure, rather than as an isolated mechanism.",
          "The mechanical layout brings moving hardware, supports, base-plate interfaces, and surrounding components into a shared assembly context."
        ]
      },
      {
        "eyebrow": "Enclosure design",
        "title": "An enclosure that works with the system inside it.",
        "body": [
          "Enclosure work connects the frame and base to mounting, access, and packaging needs. These interfaces affect how the system is assembled, serviced, and integrated.",
          "Camera mounts are one example of that broader integration work: their placement depends on the rail geometry, surrounding hardware, cable access, and the region being observed."
        ]
      },
      {
        "eyebrow": "Measured interfaces",
        "title": "The bracket follows the hardware.",
        "body": [
          "The optical bracket uses a 28.8 mm square camera-hole pattern and a 2 mm sheet thickness. Its single 35-degree bend establishes an optical-axis direction 55 degrees below horizontal in the selected mounting arrangement.",
          "The fabrication notes preserve hole sizes, edge ligaments, the proposed 8 mm standoff gap, and the distinction between the older and newer enclosure geometry. These values describe the optical-mount revision, not every subsequent bracket."
        ],
        "technicalDetails": [
          {
            "label": "Optical mount material",
            "value": "5052-H32 aluminum"
          },
          {
            "label": "Sheet thickness",
            "value": "2 mm"
          },
          {
            "label": "Camera hole pattern",
            "value": "28.8 \u00d7 28.8 mm"
          }
        ]
      },
      {
        "eyebrow": "Integration",
        "title": "A clear CAD view is only one checkpoint.",
        "body": [
          "Zero intersection in the checked camera/rail placement supported the proposed fit. It did not establish lens coverage or clearance throughout printer motion.",
          "The archive retains the camera models, enclosure references, native bracket, corner-mount revision, and verification notes so those remaining checks can use the correct source geometry."
        ]
      }
    ],
    "figures": [],
    "featuredRank": 1
  },
  {
    "order": 11,
    "slug": "pegda-tooling-and-diffusion",
    "title": "PEGDA Tooling and Diffusion",
    "discipline": "Microfluidics / Tooling / Numerical Modeling",
    "year": "2026",
    "excerpt": "A parameterized casting and assay fixture paired with a reproducible planar diffusion model and retained numerical checks.",
    "tags": [
      "SolidWorks",
      "Microfluidics",
      "Diffusion",
      "Numerical verification"
    ],
    "imageUrl": "/projects/recovered/pegda-assembly.webp",
    "mediaAlt": "PEGDA Tooling and Diffusion \u2014 project evidence",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "This project connects the geometry of a PEGDA hydrogel casting fixture to the assumptions of a transport model. The CAD package includes native assembly configurations, print meshes, neutral exports, and manufacturing notes.",
      "Casting and assay states are kept separate: the tooling that forms the gel is not assumed to remain around it during the assay. Shared parameters and CAD readback connect the accepted footprint to the diffusion model."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "The transport study uses a finite initial aqueous dose, an impermeable outer boundary, and illustrative water/gel diffusivities. Concentrations are normalized to the initial source concentration.",
      "The calculation represents a 1 mm common wet-depth slab. The gel is 2 mm tall, with additional fill/vent features; the model is not a full three-dimensional transient prediction. Hydrated geometry, diffusivity, partitioning, adhesion, and convection need experimental verification."
    ],
    "storySections": [
      {
        "eyebrow": "Tooling",
        "title": "Design the whole casting-to-assay sequence.",
        "body": [
          "Separate assembly configurations expose the mold, cured gel, and assay arrangement. Section and exploded exports document the cavity and the sequence for filling, curing, and demolding.",
          "The native parts remain the editable source. STEP, STL, and DXF deliverables carry explicit units; simplified hardware envelopes remain distinguishable from fabrication-ready custom parts."
        ],
        "figure": {
          "src": "/projects/recovered/pegda-section.webp",
          "alt": "Section through the provisional PEGDA fixture",
          "caption": "Provisional CAD geometry for mentor review; materials and manufacturing assumptions remain open.",
          "fit": "contain"
        },
        "figureSide": "left"
      },
      {
        "eyebrow": "Numerical evidence",
        "title": "Refinement and conservation before interpretation.",
        "body": [
          "Baseline spatial refinement changed the compared field by about 0.008 C\u2080; temporal refinement changed it by about 0.000795 C\u2080. Both were below the recorded 0.02 C\u2080 criterion.",
          "The baseline source mean at six hours is 0.4515 C\u2080 under the illustrative coefficients. Halving or doubling gel diffusivity shifts that result, showing why measured material properties matter. Sensitivity cases reused the baseline grid and time schedule rather than receiving independent refinement."
        ],
        "figure": {
          "src": "/projects/recovered/pegda-diffusion.webp",
          "alt": "Normalized PEGDA planar concentration heatmaps",
          "caption": "R001 baseline simulation. Illustrative material inputs; not measured laboratory concentrations.",
          "fit": "contain"
        },
        "figureSide": "left",
        "technicalDetails": [
          {
            "label": "Baseline spatial difference",
            "value": "0.00799 C\u2080"
          },
          {
            "label": "Baseline temporal difference",
            "value": "0.000795 C\u2080"
          },
          {
            "label": "Water / gel diffusivity",
            "value": "5 \u00d7 10\u207b\u00b9\u2070 / 1 \u00d7 10\u207b\u00b9\u2070 m\u00b2/s"
          }
        ]
      }
    ],
    "figures": []
  },
  {
    "order": 12,
    "slug": "cycloidal-actuator",
    "title": "Cycloidal Actuator",
    "discipline": "Robotics / Precision Mechanism Design",
    "year": "2026",
    "excerpt": "A dual-disk cycloidal reducer study connecting equation-driven profiles, bearing and shaft interfaces, native CAD, and numerical clearance.",
    "tags": [
      "SolidWorks",
      "Cycloidal reduction",
      "Parametric design",
      "Tolerance studies"
    ],
    "imageUrl": "/projects/recovered/cycloidal-actuator.webp",
    "mediaAlt": "Cycloidal Actuator \u2014 project evidence",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "The actuator study brings a motor, eccentric cam pack, twin cycloid disks, ring pins, and output interfaces into a controlled assembly. Revisions address both the profile geometry and whether the bearing/shaft stack can actually be assembled.",
      "A 35-lobe disk operates within a 36-pin ring. The R03 checkpoint preserves the nominal disk, two-disk assembly, source profile, native readback, and a separate proposed motion-clearance variant."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "The profile was refined to 61 equation samples per lobe before fitting the native splines. The reported symmetric sampled deviation from the exact equation is 0.0111 mm.",
      "This remains a provisional analysis candidate. The September animation preparation preserved the assembly, but driven motion and the reduction-ratio constraint were not verified. Tolerance, contact stress, lubrication, load sharing, and manufacture remain open."
    ],
    "storySections": [
      {
        "eyebrow": "Geometry",
        "title": "Carry the equation into an editable part.",
        "body": [
          "The native disk combines a 35-lobe perimeter with the bearing bore and six output holes. Saved-file readback records one solid body and a 9 mm thickness.",
          "The design history retains the superseded coarse profile rather than silently replacing its verification record."
        ],
        "figure": {
          "src": "/projects/recovered/cycloid-disk.webp",
          "alt": "Native CAD face of the 35-lobe cycloid disk",
          "caption": "Nominal R03 disk geometry; no manufacturing approval is implied.",
          "fit": "contain"
        },
        "figureSide": "left",
        "technicalDetails": [
          {
            "label": "Disk / ring count",
            "value": "35 lobes / 36 pins"
          },
          {
            "label": "Disk thickness",
            "value": "9 mm"
          },
          {
            "label": "Sampled profile deviation",
            "value": "0.0111 mm maximum"
          }
        ]
      },
      {
        "eyebrow": "Assembly",
        "title": "Clearance belongs to a specific configuration.",
        "body": [
          "The two eccentric centers are opposite and 2.4 mm apart, with a 1 mm axial gap between disks. Those assembly relationships are distinct from a complete driven-motion constraint.",
          "A separate radially modified motion profile produced about 0.030 mm sampled ring-pin clearance in the rigid numerical sweep. It is not evidence that the nominal hardware has that clearance under manufacturing variation or load."
        ],
        "figure": {
          "src": "/projects/recovered/cycloid-pin-assembly.webp",
          "alt": "Transparent cycloidal actuator assembly showing pins and disks",
          "caption": "CAD assembly illustration. Motion, tolerance, and load qualification remain open.",
          "fit": "contain"
        },
        "figureSide": "left"
      }
    ],
    "figures": []
  },
  {
    "order": 13,
    "slug": "ball-on-plate-controls",
    "title": "Ball-on-Plate Controls",
    "discipline": "Controls / MATLAB Simulation",
    "year": "2026",
    "excerpt": "A deterministic ball-on-plate simulator that makes tracking, estimation, actuation limits, and coordinated corner motion visible.",
    "tags": [
      "MATLAB",
      "PID",
      "LQR",
      "Inverse kinematics"
    ],
    "imageUrl": "/projects/recovered/ball-plate.webp",
    "mediaAlt": "Ball-on-Plate Controls \u2014 project evidence",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "The simulator separates dynamics, measurement, control, metrics, and rendering. It supports manual commands, discrete PID, and toolbox-free discrete LQR, with center, circle, figure-eight, and other reference paths.",
      "Four-corner inverse kinematics connects a commanded plate tilt to coordinated actuator motion. The visualization combines a three-dimensional replay with position and control histories."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "Actuator lag, rate limits, mechanical stops, stepper quantization, disturbances, and deterministic noise make the ideal model more informative. Matched controller comparisons report tracking error and control effort.",
      "The dynamics are a decoupled rolling-sphere model, and the crank/rod rendering is a simplified height mapping. The project is a controls simulator rather than a hardware-validated digital twin."
    ],
    "storySections": [
      {
        "eyebrow": "Architecture",
        "title": "Make the control loop inspectable.",
        "body": [
          "The simulation engine can run without the renderer, allowing the same experiment to produce metrics or a replay. Deterministic integration and disturbances make repeat runs comparable.",
          "A best-fit rigid plane resolves nonplanar corner commands, and the residual is reported instead of presenting an impossible rigid plate as exact."
        ]
      },
      {
        "eyebrow": "Experiments",
        "title": "Compare controllers under the same conditions.",
        "body": [
          "The comparison functions use matched trajectories and initial conditions for PID and LQR. The retained demos show basic, intermediate, advanced, and gust-disturbance scenarios.",
          "The existing videos demonstrate simulator behavior. No hardware settling-time, accuracy, or robustness claim is inferred from them."
        ]
      }
    ],
    "figures": []
  },
  {
    "order": 14,
    "slug": "modal-analysis-and-correlation",
    "title": "Modal Analysis and Correlation",
    "discipline": "Finite Element Analysis / Experimental Methods",
    "year": "2026",
    "excerpt": "A free-free plate model compared with impact-test data through mode shapes, frequency-response processing, and a signed nine-point MAC.",
    "tags": [
      "SolidWorks Simulation",
      "MATLAB",
      "Modal analysis",
      "Experimental correlation"
    ],
    "imageUrl": "/projects/recovered/modal-shape.webp",
    "mediaAlt": "Modal Analysis and Correlation \u2014 project evidence",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "This ME4005 lab combines a SolidWorks frequency study with MATLAB processing of hammer and accelerometer signals. The analysis retains the prescribed model setup and reports the disagreement with the experimental peaks.",
      "The free-free model uses a 1 cm PVC plate, shell elements, no applied loads or fixtures, and twelve requested modes. The first six solver modes are rigid-body modes; the following flexible modes carry the comparison."
    ],
    "analysisHeading": "Approach and current state",
    "analysis": [
      "The recorded analysis uses a 5 mm global mesh and a signed nine-point first-mode comparison. The Modal Assurance Criterion is 0.97734, indicating strong agreement in the compared shape.",
      "The first three model frequencies are approximately 10\u201315% below the experimental peaks. Shape correlation does not remove that frequency discrepancy. Raw voltage channels are not presented as calibrated force or acceleration."
    ],
    "storySections": [
      {
        "eyebrow": "Comparison",
        "title": "Separate shape agreement from frequency agreement.",
        "body": [
          "The first three flexible model frequencies are 85.38, 120.71, and 166.19 Hz. Native solver exports and the measured-point mapping keep the comparison traceable.",
          "The high MAC describes the signed shape at nine compared points. Material assumptions, boundary conditions, measurement locations, and experimental setup remain relevant to the frequency offset."
        ],
        "technicalDetails": [
          {
            "label": "First-mode nine-point MAC",
            "value": "0.97734"
          },
          {
            "label": "First flexible mode",
            "value": "85.38 Hz"
          },
          {
            "label": "Global mesh",
            "value": "5 mm"
          }
        ]
      },
      {
        "eyebrow": "Signal processing",
        "title": "Keep the analysis reproducible.",
        "body": [
          "The MATLAB workflow retains its time range, window, FFT ratio, and frequency-axis definition. The report combines time histories, the imaginary FRF, mode views, and numerical checks.",
          "Independent arithmetic checks support the exported results. The saved native part and result files are preserved, while the original report explicitly leaves one final native close/reopen attempt unconfirmed."
        ],
        "figure": {
          "src": "/projects/recovered/modal-frf.webp",
          "alt": "MATLAB frequency-response plot from the impact-test analysis",
          "caption": "Recorded FRF processing. Physical amplitudes require sensor calibration.",
          "fit": "contain"
        },
        "figureSide": "left"
      }
    ],
    "figures": []
  },
  {
    "order": 15,
    "slug": "nudge-desktop-companion",
    "title": "Nudge Desktop Companion",
    "discipline": "Software / AI Tools",
    "year": "2026",
    "excerpt": "A Windows companion that connects push-to-talk, screen context, spoken responses, and a cursor buddy.",
    "tags": [
      "C#",
      "WPF",
      "Voice interfaces",
      "Desktop software"
    ],
    "imageUrl": "/projects/recovered/nudge-architecture.svg",
    "mediaAlt": "Nudge Desktop Companion architecture illustration",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "Nudge is a tray-based Windows application for asking a short question in the context of the screen. Its source separates audio capture, screen capture, backend communication, speech playback, and overlay presentation.",
      "The application supports a local-provider path and a Worker-backed path through a shared backend interface. That keeps the desktop interaction independent of where provider calls are made."
    ],
    "analysisHeading": "Design decisions",
    "analysis": [
      "A model-proposed pointer target can be refined with Windows UI Automation. The refinement is bounded by a short timeout and falls back to the original target if the UI lookup fails.",
      "Setup checks the backend health and diagnostics endpoints before saving a Worker URL. The repository also includes deterministic coordinate/setup simulations, installer scripts, and update handling."
    ],
    "storySections": [
      {
        "eyebrow": "System design",
        "title": "Pointing is a coordinate problem as well as a language problem.",
        "body": [
          "A useful reply needs to land on the intended control across display arrangements. The app keeps captured-screen geometry and the returned target together, with a separate refinement step for accessible UI elements.",
          "The architecture diagram describes the source workflow. It is not a recording of a live provider session or a measurement of response time."
        ]
      },
      {
        "eyebrow": "System design",
        "title": "Keep setup and runtime paths explicit.",
        "body": [
          "Local credentials and a remote backend are separate setup choices. Both implement the same desktop-facing interface, while provider-specific services remain outside the overlay code.",
          "The archived source and setup documentation preserve the application design without including personal API keys."
        ]
      }
    ],
    "figures": [
      {
        "src": "/projects/recovered/engineering-clicky.webp",
        "alt": "Nudge desktop interface checkpoint",
        "caption": "Archived desktop interface checkpoint collected under the Clicky name.",
        "fit": "contain"
      }
    ]
  },
  {
    "order": 16,
    "slug": "arxiv-expert",
    "title": "arXiv Expert",
    "discipline": "Software / AI Tools",
    "year": "2026",
    "excerpt": "A persistent paper library and research assistant with incremental ingestion, scoped retrieval, and named conversations.",
    "tags": [
      "Python",
      "Retrieval",
      "Research tooling",
      "Background jobs"
    ],
    "imageUrl": "/projects/recovered/arxiv-architecture.svg",
    "mediaAlt": "arXiv Expert architecture illustration",
    "mediaFit": "contain",
    "featured": false,
    "size": "standard",
    "overviewHeading": "The project",
    "overview": [
      "arXiv Expert tracks one official arXiv category per expert and builds a persistent library of papers. A browser chat supports analysis and experiment-design conversations over that saved context.",
      "Paper identity, indexing state, citations, and conversation history are stored explicitly. Focused papers can narrow a conversation without creating another independent copy of the library."
    ],
    "analysisHeading": "Design decisions",
    "analysis": [
      "The sync service uses a stored cursor, an overlap window, retryable states, and an expert-level lock. Missed background runs can be caught up without treating every paper as new.",
      "Chat routing starts from the saved library. A focused conversation limits retrieval to its selected papers unless the user explicitly broadens the scope. Web evidence is distinguished from saved-library evidence."
    ],
    "storySections": [
      {
        "eyebrow": "System design",
        "title": "Make the evidence boundary visible.",
        "body": [
          "The chat service validates that a conversation belongs to its expert, retains its messages, and keeps focused-paper selection separate from the global paper library.",
          "Stable citation identities connect an answer to its source. A manually imported paper can be reused by multiple conversations rather than uploaded again."
        ]
      },
      {
        "eyebrow": "System design",
        "title": "Treat ingestion as a resumable workflow.",
        "body": [
          "Pending and failed indexing jobs are revisited during synchronization. The cursor and overlap window separate collection progress from successful indexing.",
          "The repository contains local-fake tests for ingestion, persistence, routing, and the web interface. Live provider performance was not measured for this portfolio case study."
        ]
      }
    ],
    "figures": []
  }
];
