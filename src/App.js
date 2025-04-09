import React, { useState } from 'react';
import './App.css';

const roadmapData = [
  {
    title: '🌱 Stage 1: Core Foundations',
    content: (
      <>
        <h3>🔹 Programming (Python)</h3>
        <ul>
          <li><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer">Python.org Documentation</a> (Official docs, great for learning Python basics)</li>
          <li><a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer">Automate the Boring Stuff with Python</a> (Book/Free course, focuses on practical Python applications)</li>
          <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> (Python section, great interactive lessons)</li>
        </ul>

        <h3>🔹 SQL & Databases</h3>
        <ul>
          <li><a href="https://sqlzoo.net/" target="_blank" rel="noopener noreferrer">SQLZoo</a> (Interactive SQL tutorials)</li>
          <li><a href="https://mode.com/sql-tutorial/" target="_blank" rel="noopener noreferrer">Mode Analytics SQL Tutorial</a> (Interactive lessons with practical exercises)</li>
          <li><a href="https://leetcode.com/problemset/database/" target="_blank" rel="noopener noreferrer">LeetCode SQL Problems</a> (Great for practicing SQL problems)</li>
          <li><a href="https://www.khanacademy.org/computing/computer-programming/sql" target="_blank" rel="noopener noreferrer">Khan Academy SQL</a> (Beginner-friendly)</li>
        </ul>
      </>
    ),
  },
  {
    title: '🏗️ Stage 2: Data Engineering Basics',
    content: (
      <>
        <h3>🔹 Data Manipulation & Analysis</h3>
        <ul>
          <li><a href="https://www.kaggle.com/learn/pandas" target="_blank" rel="noopener noreferrer">Kaggle Python and Pandas Course</a> (Free course with hands-on exercises)</li>
          <li><a href="https://www.datacamp.com/courses/pandas-foundations" target="_blank" rel="noopener noreferrer">DataCamp’s Introduction to Pandas</a> (First chapter free)</li>
          <li><a href="https://pandas.pydata.org/pandas-docs/stable/" target="_blank" rel="noopener noreferrer">Pandas Documentation</a> (Official documentation)</li>
        </ul>

        <h3>🔹 ETL Pipelines</h3>
        <ul>
          <li><a href="https://realpython.com/python-etl/" target="_blank" rel="noopener noreferrer">ETL with Python (Blog)</a> (Great step-by-step guide for building ETL pipelines)</li>
          <li><a href="https://airflow.apache.org/docs/apache-airflow/stable/" target="_blank" rel="noopener noreferrer">Airflow Documentation</a> (Official Airflow docs and tutorials)</li>
          <li><a href="https://www.youtube.com/watch?v=XTpXfmgJl3w" target="_blank" rel="noopener noreferrer">Building ETL Pipelines (YouTube)</a> (Great YouTube tutorial)</li>
        </ul>

        <h3>🔹 Data Storage Formats</h3>
        <ul>
          <li><a href="https://medium.com/@saeed.akbari96/understanding-the-difference-between-parquet-avro-and-orc-file-formats-6c2b9d0c79f2" target="_blank" rel="noopener noreferrer">Data Formats (Medium Blog)</a> (Explanation of data formats like Parquet and Avro)</li>
        </ul>

        <h3>🔹 Version Control</h3>
        <ul>
          <li><a href="https://www.freecodecamp.org/news/git-and-github-for-beginners/" target="_blank" rel="noopener noreferrer">Git & GitHub Course (freeCodeCamp)</a> (Comprehensive free guide to Git and GitHub)</li>
          <li><a href="https://lab.github.com/" target="_blank" rel="noopener noreferrer">GitHub Learning Lab</a> (Interactive GitHub tutorials)</li>
        </ul>
      </>
    ),
  },
  {
    title: '☁️ Stage 3: Cloud & Big Data Tools',
    content: (
      <>
        <h3>🔹 Intro to Cloud Platforms</h3>
        <ul>
          <li><a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer">AWS Training</a> (Free introductory courses on AWS services)</li>
          <li><a href="https://cloud.google.com/training" target="_blank" rel="noopener noreferrer">Google Cloud Training</a> (Free training resources from Google Cloud)</li>
          <li><a href="https://learn.microsoft.com/en-us/training/azure/" target="_blank" rel="noopener noreferrer">Microsoft Learn - Azure</a> (Free Azure courses)</li>
        </ul>

        <h3>🔹 Big Data Ecosystem</h3>
        <ul>
          <li><a href="https://www.coursera.org/learn/big-data-introduction" target="_blank" rel="noopener noreferrer">Intro to Big Data (Coursera)</a> (Free audit option for the course)</li>
          <li><a href="https://www.youtube.com/watch?v=I_zvByOY_JA" target="_blank" rel="noopener noreferrer">Apache Spark YouTube</a> (Great free video on getting started with Spark)</li>
          <li><a href="https://www.tutorialspoint.com/hadoop/index.htm" target="_blank" rel="noopener noreferrer">Learn Hadoop (TutorialsPoint)</a> (Basic tutorial)</li>
        </ul>
      </>
    ),
  },
  {
    title: '🧰 Stage 4: Advanced Data Engineering Tools',
    content: (
      <>
        <h3>🔹 Orchestration & Workflow</h3>
        <ul>
          <li><a href="https://airflow.apache.org/docs/apache-airflow/stable/" target="_blank" rel="noopener noreferrer">Airflow Documentation</a> (Airflow Docs - Learn by doing)</li>
          <li><a href="https://docs.getdbt.com/docs/introduction" target="_blank" rel="noopener noreferrer">dbt Documentation</a> (Official docs for learning data transformations)</li>
        </ul>

        <h3>🔹 Data Warehousing</h3>
        <ul>
          <li><a href="https://www.coursera.org/learn/google-cloud-bigquery" target="_blank" rel="noopener noreferrer">Google BigQuery (Coursera)</a> (Free audit option for the course)</li>
          <li><a href="https://www.snowflake.com/webinars/" target="_blank" rel="noopener noreferrer">Snowflake Essentials</a> (Free webinars for Snowflake)</li>
          <li><a href="https://aws.amazon.com/redshift/getting-started/" target="_blank" rel="noopener noreferrer">AWS Redshift Basics</a> (Free tutorials for AWS Redshift)</li>
        </ul>

        <h3>🔹 Containerization & DevOps Basics</h3>
        <ul>
          <li><a href="https://docker-curriculum.com/" target="_blank" rel="noopener noreferrer">Docker for Beginners</a> (Free online guide)</li>
          <li><a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/" target="_blank" rel="noopener noreferrer">Kubernetes Basics</a> (Free Kubernetes tutorial)</li>
          <li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener noreferrer">CI/CD Tutorial (GitLab)</a> (Free GitLab CI/CD docs)</li>
        </ul>
      </>
    ),
  },
  {
    title: '🚀 Stage 5: Cloud Engineering Specialization',
    content: (
      <>
        <h3>🔹 Infrastructure as Code (IaC)</h3>
        <ul>
          <li><a href="https://learn.hashicorp.com/collections/terraform/aws-get-started" target="_blank" rel="noopener noreferrer">Terraform Getting Started</a> (Official Terraform guide)</li>
          <li><a href="https://aws.amazon.com/cloudformation/" target="_blank" rel="noopener noreferrer">AWS CloudFormation (AWS Docs)</a> (Introduction to IaC with AWS)</li>
        </ul>

        <h3>🔹 Serverless & Event-Driven Systems</h3>
        <ul>
          <li><a href="https://aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">AWS Lambda (AWS Docs)</a> (AWS documentation for Lambda)</li>
          <li><a href="https://cloud.google.com/functions/docs/" target="_blank" rel="noopener noreferrer">Google Cloud Functions (Docs)</a> (Google Cloud Functions tutorial)</li>
        </ul>

        <h3>🔹 Monitoring & Security</h3>
        <ul>
          <li><a href="https://aws.amazon.com/cloudwatch/" target="_blank" rel="noopener noreferrer">AWS CloudWatch Documentation</a> (Learn AWS CloudWatch)</li>
          <li><a href="https://learn.microsoft.com/en-us/azure/azure-monitor/" target="_blank" rel="noopener noreferrer">Azure Monitor (Docs)</a> (Azure monitoring tools)</li>
          <li><a href="https://cloud.google.com/security" target="_blank" rel="noopener noreferrer">Google Cloud Security</a> (Google Cloud security best practices)</li>
        </ul>
      </>
    ),
  },
  {
    title: '📦 Stage 6: Projects & Portfolio',
    content: (
      <>
        <h3>🔹 Free Resources to Help Build Projects</h3>
        <ul>
          <li><a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">Kaggle</a> (Kaggle offers datasets and challenges to build your projects)</li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> (Host your projects and contribute to open-source projects)</li>
          <li><a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer">Streamlit</a> (Create interactive data apps with Streamlit)</li>
          <li><a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">Google Colab</a> (Build and share Jupyter notebooks with free GPUs)</li>
        </ul>
      </>
    ),
  },
  {
    title: '🧠 Additional Learning Platforms',
    content: (
      <>
        <ul>
          <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">Coursera</a> (Free audit for courses like Google Cloud Data Engineer, AWS, etc.)</li>
          <li><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">edX</a> (Free courses from top universities like MIT, Harvard, and more)</li>
          <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a> (Great for hands-on tutorials and guides)</li>
        </ul>
        <p>Channels to explore:</p>
        <ul>
          <li>Data Engineering YouTube (Search for data engineering-specific tutorials)</li>
          <li>Academind (For cloud and DevOps)</li>
        </ul>
      </>
    ),
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedStages, setCompletedStages] = useState({}); // Track completed stages

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % roadmapData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + roadmapData.length) % roadmapData.length);
  };

  const handleCompletionToggle = (index) => {
    setCompletedStages((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle completion status
    }));
  };

  return (
    <div className="App">
      <h1>Data Engineering & Cloud Computing Roadmap</h1>
      <div
        className={`stage-container ${completedStages[currentIndex] ? 'completed' : ''}`}
        style={{
          background: completedStages[currentIndex]
            ? 'linear-gradient(145deg, #123217, #1c451f)' // Gradient for completed
            : 'linear-gradient(135deg, #123217, #1e6a47)', // Light green gradient for non-completed
          color: '#fff', // Make text white for all stages
          padding: '20px',
          borderRadius: '10px',
          margin: '20px auto', // Center the container
          width: '80%', // Reduce the width to make it a place card
          maxWidth: '600px', // Set a max width to prevent it from becoming too wide
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add some shadow for depth
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
      >
        <h2>{roadmapData[currentIndex].title}</h2>
        <div className="content">{roadmapData[currentIndex].content}</div>
        <div className="completion-checkbox">
          <input
            type="checkbox"
            checked={completedStages[currentIndex] || false}
            onChange={() => handleCompletionToggle(currentIndex)}
          />
          <label>Mark as Completed</label>
        </div>
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

      {/* Full Roadmap Document Link */}
      <a
       href="/data_engineering_cloud_roadmap.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="doc-link-button"
      >
        View Full Roadmap Document
      </a>

      {/* Footer */}
      {/* <footer>
        <p>&copy; 2025 Data Engineering Roadmap</p>
      </footer> */}
    </div>
  );
}

export default App;
