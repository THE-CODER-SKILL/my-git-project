

        import React from 'react';
import './kabil.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
  return (
    <div className="resume">
      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <img src="/images/kabil-3.jpeg" alt="Profile Photo" />
        <h2>K. Kabilan</h2>

        {/* Contact */}
        <div className="section-title">Contact</div>
        <hr />
        <ul>
          <li>📞 +91 9345611287</li>
          <li>📧 kabilan0719@gmail.com</li>
          <li>📍 28, Arasi Street, Thallakullam, Madurai</li>
        </ul>

        {/* Education */}
        <div className="section-title">Education</div>
        <hr />
        <ul>
          <li><strong>2022 - 2023</strong><br />ST. Mary's Higher Secondary School<br />Higher Studies</li>
          <li><strong>2023 - 2026</strong><br />Yadava College<br />Bachelor of Commerce</li>
        </ul>

        {/* Skills */}
        <div className="section-title">Skills</div>
        <hr />
        <ul>
          <li>Communication (written, verbal, presentation)</li>
          <li>Teamwork and collaboration</li>
          <li>Problem-solving and analytical thinking</li>
          <li>Time management and organization</li>
          <li>Attention to detail</li>
          <li>Effective communication</li>
          <li>Interpersonal skills</li>
        </ul>

        {/* Languages */}
        <div className="section-title">Languages</div>
        <hr />
        <ul>
          <li>English - Basic</li>
          <li>Tamil - Native</li>
          <li>Hindi - Basic</li>
        </ul>
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div className="main">
        <h1>K. Kabilan</h1>
        <h5>Finance Graduate</h5>
        <div className="divider"></div>

        {/* Profile */}
        <div className="section-header">Profile</div>
        <p>
          Highly motivated finance graduate from Yadava College, looking to start a career in finance.
          Strong foundation in financial accounting, management, and markets. Proficient in Excel,
          financial modeling, and data analysis. Excellent communication and teamwork skills,
          with a willingness to learn and grow in the finance industry.
        </p>

        <div className="divider"></div>

        {/* Work Experience */}
        <div className="section-header">Work Experience</div>
        <ul>
          <li>Fresher</li>
        </ul>

        {/* Academic Projects */}
        <div className="job">
          <h6>Academic Projects</h6>
          <ul>
            <li>Comparative Study of Financial Performance of Indian Banks (Public vs. Private Sector)</li>
            <li>Analysis of Stock Market Trends and Predictive Modeling using Technical Indicators</li>
            <li>Impact of GST on SMEs in India</li>
            <li>Financial Statement Analysis of a Listed Company (Ratio & Trend Analysis)</li>
            <li>Portfolio Management and Optimization using Markowitz Model</li>
          </ul>
        </div>

        {/* Certificates */}
        <div className="job">
          <h6>Certificates</h6>
          <ul>
            <li>
              Completed courses in Tally ERP 9, MS Office Suite (Word, Excel, PowerPoint, Outlook),
              and spoken English with strong communication skills.
            </li>
          </ul>
        </div>

        {/* Additional Skills */}
        <div className="job">
          <h6>Additional Skills</h6>
          <ul>
            <li>
              Customer Focus, Basic Knowledge of Industry Regulations, Continuous Learning,
              Conflict Resolution, Critical Thinking, Efficiency, Dependability, Ethical Conduct
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        {/* References */}
        <div className="section-header">References</div>
        <div className="reference">
          <div><strong>Available upon request</strong></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;