export const resumeData = {
  personalInfo: {
    name: "Abhinav Pandey",
    role: "Lead Data Engineer",
    subtitle: "Big Data & Cloudera Specialist | 14+ Years",
    phone: "+91-7000102121",
    email: "abhipan1987@gmail.com",
    location: "India",
    heroTitle: "Architecting resilient high-throughput",
    heroHighlight: "Big Data systems",
    aboutTitle: "Lead Data Engineer specializing in Cloudera CDH/CDP, Apache Spark, and Enterprise Big Data Ecosystems.",
    aboutSubtitle: "14+ years of end-to-end Big Data, Spark, and Hadoop engineering across BFSI and healthcare domains. Deep expertise in CDH 5.x through 7.1 / CDP, HDFS/YARN performance tuning, Ranger security, and hybrid cloud integration with GCP BigQuery.",
    summary:
      "Results-driven Lead Data Engineer with 14+ years of end-to-end Big Data, Spark, and Hadoop ecosystem experience across BFSI and healthcare domains. Deep hands-on expertise with Cloudera Distribution of Hadoop (CDH 5.x through 7.1 / CDP) — from HDFS tuning and YARN capacity scheduling to Ranger-based security and Impala query optimization. Proven track record of architecting high-throughput ETL pipelines using Spark (Scala/Java/Python), Hive, Sqoop, Oozie, and HBase on CDH clusters. Complementary experience with GCP (BigQuery, DataFactory) for hybrid cloud workloads. Strong CI/CD automation background (TeamCity, IBM uDeploy) and team leadership skills.",
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" }
    ],
    socials: [
      { name: "LinkedIn", link: "https://linkedin.com", icon: "bi bi-linkedin" },
      { name: "GitHub", link: "https://github.com", icon: "bi bi-github" },
      { name: "Email", link: "mailto:abhipan1987@gmail.com", icon: "bi bi-envelope" }
    ]
  },

  skills: {
    title: "Skills & Technical Expertise",
    items: [
      {
        icon: "bi bi-hdd-network",
        value: "Cloudera / CDP",
        label: "CDH 5.x, 6.x, 7.1 (CDP)",
        description: "HUE, Cloudera Manager, Ranger, Knox, Impala, Kudu, Navigator, HDFS tuning, and YARN capacity scheduling."
      },
      {
        icon: "bi bi-cpu",
        value: "Apache Spark",
        label: "Distributed Processing",
        description: "Spark 2.x/3.x with Scala, Java & Python. Partition pruning, broadcast joins, executor memory optimization, and zero GC failures."
      },
      {
        icon: "bi bi-database-check",
        value: "Big Data Stack",
        label: "ETL & Storage",
        description: "Hive (ORC vectorization & CBO), HBase real-time schema design, Sqoop ingestion, Oozie coordinators, and Kafka."
      },
      {
        icon: "bi bi-cloud-check",
        value: "Cloud & DevOps",
        label: "GCP & CI/CD",
        description: "GCP BigQuery & DataFactory hybrid cloud pipelines, TeamCity, IBM uDeploy, Linux (RHEL/Ubuntu), Maven, and Spring Boot."
      }
    ],
    skillsProgress: [
      { title: "Cloudera CDH / CDP (5.x, 6.x, 7.1)", progress: 96 },
      { title: "Apache Spark (Scala / Java / Python)", progress: 95 },
      { title: "Hadoop Ecosystem (HDFS, YARN, Hive, Sqoop)", progress: 95 },
      { title: "HBase & Impala Low-Latency Querying", progress: 90 },
      { title: "Apache Ranger & Data Lake Governance", progress: 92 },
      { title: "GCP BigQuery & Cloud Integration", progress: 85 },
      { title: "CI/CD (TeamCity, IBM uDeploy) & Linux", progress: 88 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Multi-TB Spark ETL on Cloudera CDP 7.1",
      subtitle: "Enterprise Financial Data Platform",
      image: "/img/project1.png",
      categories: ["Big Data", "Spark", "Cloudera CDP"],
      categoryKeys: ["spark", "bigdata", "cloudera"],
      projectLink: "/portfolio-single",
      description:
        "Architected and owned end-to-end Spark (Scala) ETL pipelines on CDH 7.1 / CDP clusters handling ingestion, transformation, and HDFS persistence at multi-TB scale daily for Finance Bank. Tuned YARN queues and Spark executor memory/cores, improving job throughput by ~35% while eliminating GC-related failures.",
      task: "High-Throughput Big Data Pipeline & YARN Tuning",
      role: ["Lead Consultant", "Data Architect"],
      client: "Finance Bank (via HCLTech)",
      categoryYear: "Spark & CDH 7.1 / 2021 – 2025",
      liveSite: "https://github.com",
      gallery: ["/img/project1.png", "/img/project2.png"]
    },
    {
      id: 2,
      title: "Bulk Medical Claims Pipeline & HBase Architecture",
      subtitle: "Large-Scale Healthcare Data Lake",
      image: "/img/project2.png",
      categories: ["Hadoop", "HBase", "Healthcare"],
      categoryKeys: ["bigdata", "hadoop"],
      projectLink: "/portfolio-single",
      description:
        "Built and maintained large-scale Hadoop ETL pipelines on CDH 5.x and 6.x processing bulk medical claims. Ingested from Oracle 11g via Sqoop into partitioned Hive ORC tables, and designed HBase schemas for real-time patient record lookups with row-key strategies optimized for range scans.",
      task: "Claims Ingestion & HBase Storage Design",
      role: ["IT Analyst", "Big Data Engineer"],
      client: "Quest Diagnostics (via TCS)",
      categoryYear: "Hadoop & HBase / 2014 – 2021",
      liveSite: "https://github.com",
      gallery: ["/img/project2.png", "/img/project3.png"]
    },
    {
      id: 3,
      title: "Cloudera Enterprise Upgrades & Security Governance",
      subtitle: "CDH 5.x → 6.x → 7.1 (CDP) & Ranger Policies",
      image: "/img/project3.png",
      categories: ["Cloudera", "Security", "Architecture"],
      categoryKeys: ["cloudera", "bigdata"],
      projectLink: "/portfolio-single",
      description:
        "Hands-on contributor to two major CDH upgrades. Validated Hive metastore compatibility, updated Spark jobs to Spark 2.x APIs, and executed Sentry-to-Ranger policy transfers. Enforced column-level and row-level security using Apache Ranger on CDP 7.1 ensuring PCI/SOX compliance.",
      task: "Metastore Migration & Ranger Governance",
      role: ["Lead Data Engineer", "Security Lead"],
      client: "Enterprise Banking & Healthcare",
      categoryYear: "Cloudera CDP / 2018 – 2024",
      liveSite: "https://github.com",
      gallery: ["/img/project3.png", "/img/project4.png"]
    },
    {
      id: 4,
      title: "Hybrid Cloud Integration & CI/CD Automation",
      subtitle: "GCP BigQuery & TeamCity + uDeploy",
      image: "/img/project4.png",
      categories: ["GCP", "DevOps", "CI/CD"],
      categoryKeys: ["cloud", "bigdata"],
      projectLink: "/portfolio-single",
      description:
        "Integrated GCP DataFactory and BigQuery with on-premises HDFS/CDH clusters for advanced analytics and reporting. Designed and deployed automated CI/CD pipelines with TeamCity and IBM uDeploy that reduced deployment cycle times by 40% and standardized multi-environment artifact promotion.",
      task: "Hybrid Cloud & DevOps Pipeline Automation",
      role: ["Lead Consultant", "DevOps Architect"],
      client: "Finance Bank (via HCLTech)",
      categoryYear: "GCP & DevOps / 2022 – 2025",
      liveSite: "https://github.com",
      gallery: ["/img/project4.png", "/img/project1.png"]
    }
  ],

  education: [
    {
      id: 1,
      count: "01.",
      title: "HCLTech | Client: Finance Bank",
      position: "Lead Consultant – Data Engineering",
      date: "Oct 2021 – Oct 2025",
      grade: "Spark 2.x/3.x, CDH 7.1 CDP, Ranger, GCP BigQuery",
      description:
        "Architected multi-TB Spark ETL on CDH 7.1 / CDP. Configured YARN capacity scheduling & executor memory (+35% throughput gain, zero GC failures). Enforced Apache Ranger row/column security for PCI/SOX compliance, integrated GCP DataFactory/BigQuery, and built TeamCity + uDeploy CI/CD."
    },
    {
      id: 2,
      count: "02.",
      title: "Tata Consultancy Services (TCS) | Client: Quest Diagnostics",
      position: "IT Analyst – Big Data Engineering",
      date: "Jun 2014 – Oct 2021",
      grade: "CDH 5.x/6.x, Hive ORC, HBase, Impala, Oozie",
      description:
        "Engineered high-scale Hadoop ETL for bulk medical claims, designed HBase schemas for real-time patient lookups, replaced legacy Hive MR jobs with Impala for low-latency BI queries, achieved ~45% ETL runtime reductions via Hive CBO and ORC vectorization, and led CDH upgrades."
    },
    {
      id: 3,
      count: "03.",
      title: "WebTek Labs Pvt. Ltd., New Delhi",
      position: "Software Engineer",
      date: "Apr 2011 – May 2014",
      grade: "Spring, Hibernate, MySQL, DB2, JBOSS, Linux",
      description:
        "Developed web-based event management system using Spring and Hibernate. Integrated third-party payment gateways, built Quartz automated schedulers, and executed seamless DB2 to MySQL database migration with zero data loss."
    },
    {
      id: 4,
      count: "04.",
      title: "Rajiv Gandhi Technical University (RGPV), Bhopal",
      position: "Master of Computer Applications (MCA)",
      date: "2008 – 2011",
      grade: "Postgraduate Degree in Computer Applications",
      description:
        "Master of Computer Applications covering Advanced Database Systems, Distributed Computing, Object-Oriented Analysis & Design (OOAD), Java/J2EE Architecture, Data Structures, and Enterprise Software Engineering methodologies."
    }
  ],

  achievements: {
    title: "Key Highlights & Achievements",
    items: [
      {
        title: "CDH 5.x → 6.x → 7.1 (CDP) Upgrades",
        year: "2018 - 2024",
        award: "Enterprise Architecture Upgrade",
        description: "Hands-on contributor to two major CDH upgrades: metastore migration, Sentry-to-Ranger policy transfer, and Spark API compatibility.",
        link: "/about"
      },
      {
        title: "35% Spark Throughput Gain & Zero OOMs",
        year: "2023",
        award: "Cluster Optimization",
        description: "YARN capacity scheduling and Spark memory tuning on CDH 7.1 clusters eliminated OOM failures and reduced SLA breach incidents to zero.",
        link: "/about"
      },
      {
        title: "45% ETL Runtime Reduction on Hive ORC",
        year: "2020",
        award: "Performance Engineering",
        description: "Leveraged Hive CBO, ORC vectorization, and bloom filters on CDH 6.x clusters at Quest Diagnostics to dramatically cut processing time.",
        link: "/about"
      },
      {
        title: "40% Deployment Cycle Reduction with CI/CD",
        year: "2022",
        award: "DevOps & Automation",
        description: "Designed and implemented TeamCity + IBM uDeploy CI/CD pipelines standardizing multi-environment releases.",
        link: "/portfolio"
      }
    ]
  },

  services: [
    {
      id: "01",
      title: "Big Data Architecture & Spark ETL",
      description:
        "Architecting resilient, multi-TB scale Spark (Scala/Java/Python) ETL pipelines on Cloudera CDH/CDP and Hadoop clusters with optimized memory and partition strategies."
    },
    {
      id: "02",
      title: "Cloudera CDH / CDP Administration & Tuning",
      description:
        "HDFS tuning, YARN capacity scheduling, Cloudera Manager health operations, and Apache Ranger column/row security policies for strict PCI/SOX compliance."
    },
    {
      id: "03",
      title: "Hybrid Cloud & Enterprise Data Lakes",
      description:
        "Bridging on-premises Hadoop data lakes with GCP BigQuery and DataFactory, automating multi-environment deployments using TeamCity and IBM uDeploy."
    }
  ],

  blogs: [
    {
      id: 1,
      title: "Architecting Multi-TB Spark ETL Pipelines on Cloudera CDP 7.1",
      date: "January 20, 2025",
      author: "Abhinav Pandey",
      link: "/blog-single",
      categories: ["Apache Spark", "Cloudera CDP", "Big Data"],
      snippet: "Key strategies for tuning YARN capacity schedulers, partition pruning, and broadcast joins to eliminate GC failures and maximize throughput."
    },
    {
      id: 2,
      title: "Upgrading from CDH 5/6 to CDP: Sentry-to-Ranger Security & Metastore Migration",
      date: "February 10, 2025",
      author: "Abhinav Pandey",
      link: "/blog-single",
      categories: ["Cloudera", "Apache Ranger", "Security"],
      snippet: "Practical lessons learned while transferring security policies from Apache Sentry to Apache Ranger and validating Hive metastore schemas."
    },
    {
      id: 3,
      title: "Hybrid Cloud Analytics: Bridging On-Premises Hadoop with GCP BigQuery",
      date: "March 5, 2025",
      author: "Abhinav Pandey",
      link: "/blog-single",
      categories: ["GCP BigQuery", "Hybrid Cloud", "ETL"],
      snippet: "How modern enterprises combine reliable on-premises HDFS data lakes with Google Cloud BigQuery for agile reporting and analytics."
    }
  ]
};
