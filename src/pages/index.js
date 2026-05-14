import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { missionData, projectsData, teamData } from '../data/orgData';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title}`}
      description="与地学的缘起 - 行星演化与矿物信息学研究组织">
      
      {/* Hero 区域 */}
      <header className="hero-section">
        <h1>GeoGenesis</h1>
        <p style={{fontSize: '20px', maxWidth: '600px'}}>
          寓意“与地学的缘起”<br/>
          聚焦行星演化、矿物信息学与生命起源的交叉探索，构建学生科研共同体。
        </p>
      </header>

      <main>
        {/* 1. 关于我们 (Mission/Vision) */}
        <section className="section-wrapper" id="about">
          <h2 className="section-title">关于 GeoGenesis</h2>
          <div className="grid-3">
            {missionData.map((item, idx) => (
              <div className="custom-card" key={idx}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 项目系统 */}
        <section className="section-wrapper" id="projects" style={{backgroundColor: 'var(--bg-light)'}}>
          <h2 className="section-title">组织核心项目</h2>
          <div className="grid-3">
            {projectsData.map((proj, idx) => (
              <div className="custom-card" key={idx}>
                <h3>{proj.title}</h3>
                <div style={{fontSize: '14px', marginBottom: '15px', color: 'var(--ifm-color-emphasis-600)'}}>
                  <p style={{margin: '2px 0'}}><strong>🎯 目标：</strong>{proj.target}</p>
                  <p style={{margin: '2px 0'}}><strong>📊 状态：</strong>{proj.status}</p>
                  <p style={{margin: '2px 0'}}><strong>👤 负责：</strong>{proj.leader}</p>
                  <p style={{margin: '2px 0'}}><strong>📦 产出：</strong>{proj.output}</p>
                </div>
                <p style={{fontSize: '15px'}}>{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 成员系统 */}
        <section className="section-wrapper" id="members">
          <h2 className="section-title">核心成员节点</h2>
          <div className="grid-3">
            {teamData.map((member, idx) => (
              <div className="team-card" key={idx}>
                <img src={member.avatar} alt={member.name} className="team-avatar" />
                <h3>{member.name}</h3>
                <div style={{color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '15px'}}>
                  {member.role}
                </div>
                <div style={{fontSize: '14px', textAlign: 'left', lineHeight: '1.8'}}>
                  <strong>专注方向：</strong>{member.direction}<br/>
                  <strong>参与项目：</strong>{member.projects}<br/>
                  <strong>专业背景：</strong>{member.major}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}