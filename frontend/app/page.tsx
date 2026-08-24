import React from 'react';
import Icon from '@/components/Icon';
import Shot from '@/components/Shot';
import ContactForm from '@/components/ContactForm';
import NavMobile from '@/components/NavMobile';
import Carousel from '@/components/Carousel';
import {
	SERVICES,
	WORKS,
	CAPABILITIES,
	TECH_STACK,
	PROCESS_STEPS,
	HERO_SLIDES,
	TRENDING_COURSES,
} from './data';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://rdpinfo.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE}/#organization`,
      name: 'Mission JEET',
      alternateName: ['MissionJEET'],
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/og-image.png` },
      description:
        'Mission JEET is a live-classes platform for JEE Main & Advanced aspirants — daily live classes, expert mentorship, test series with All-India rank comparison, and curated study material.',
      areaServed: 'India',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'devansh@nexttoppers.com',
        contactType: 'Admissions',
        availableLanguage: 'English',
      },
      knowsAbout: [
        'JEE Main Preparation', 'JEE Advanced Preparation',
        'Live Online Classes', 'Test Series & Rank Analysis',
        'Doubt Solving', 'Study Material & Notes',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'Mission JEET',
      publisher: { '@id': `${SITE}/#organization` },
    },
    {
      '@type': 'ItemList',
      name: 'Courses & offerings from Mission JEET',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Live Interactive Classes' },
        { '@type': 'ListItem', position: 2, name: 'Expert Faculty & Mentorship' },
        { '@type': 'ListItem', position: 3, name: 'Test Series & Rank Analysis' },
        { '@type': 'ListItem', position: 4, name: 'Recorded Lecture Library' },
        { '@type': 'ListItem', position: 5, name: 'Study Material & Notes' },
        { '@type': 'ListItem', position: 6, name: 'Doubt Solving' },
        { '@type': 'ListItem', position: 7, name: 'Mission JEET Mobile App' },
        { '@type': 'ListItem', position: 8, name: 'Practice Question Bank' },
        { '@type': 'ListItem', position: 9, name: 'Performance Analytics' },
      ],
    },
  ],
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			{/* NAV */}
			<header className='nav nav-jeet'>
				<div className='container nav-inner'>
					<a className='brand-jeet' href='#top'>
						<span className='m1'>Mission</span>
						<span className='m2'>JEET</span>
					</a>
					<div className='nav-search'>
						<Icon name='search' />
						<span>What are you looking for...</span>
					</div>
					<nav className='nav-links'>
						<a href='#work'>Blogs</a>
						<a href='#services'>Our Products</a>
						<a href='#process'>How it works</a>
					</nav>
					<a className='nav-cta' href='#contact'>
						Login / Register
					</a>
					<NavMobile />
				</div>
			</header>

			<main id='top'>
				{/* HERO CAROUSEL */}
				<section className='jeet-hero' style={{ borderTop: 'none' }}>
					<div className='container'>
						<Carousel slides={HERO_SLIDES} />
					</div>
				</section>

				{/* TRENDING COURSES */}
				<section style={{ paddingTop: 0, paddingBottom: 48, borderTop: 'none' }}>
					<div className='container'>
						<div className='trending-head'>🔥 Trending Course</div>
						<div className='course-grid'>
							{TRENDING_COURSES.map((c) => (
								<div className='course-card' key={c.title + c.highlight}>
									<div className='cc-top'>
										<span className='cc-badge'>{c.cls}</span>
										<span className='cc-price'>
											<span className='old'>{c.oldPrice}</span>
											<span className='new'>{c.newPrice}</span>
										</span>
										<div className='cc-title'>
											{c.title}
											<br />
											<em>{c.highlight}</em>
										</div>
									</div>
									<a className='cc-cta' href='#contact'>
										Enroll now
									</a>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* SERVICES */}
				<section id='services'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>Courses & offerings</span>
							<h2>Everything a JEE aspirant needs, in one place.</h2>
							<p>
								From daily live classes to test series and mentorship — every part of your
								preparation is designed to work together, not as separate add-ons.
							</p>
						</div>

						<div className='services-grid'>
							{SERVICES.map((s) => (
								<div className='svc' key={s.tag}>
									<span className='svc-tag'>{s.tag}</span>
									<div className='icon'>
										<Icon name={s.icon} />
									</div>
									<h3>{s.title}</h3>
									<p>{s.desc}</p>
									<ul>
										{s.points.map((p) => (
											<li key={p}>{p}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* WORK / RESULTS */}
				<section id='work'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>How students prepare with us</span>
							<h2>A structured path from first class to exam day.</h2>
							<p>
								A snapshot of how Mission JEET students actually study — daily classes, weekly
								tests, personal mentorship, and a mobile app that keeps it all in one place.
							</p>
						</div>

						<div className='work-grid'>
							{WORKS.map((w) => (
								<article className='work-card' key={w.title}>
									<Shot src={w.shot} title={w.shotTitle} />
									<div className='work-body'>
										<div className='kicker'>{w.kicker}</div>
										<h3>{w.title}</h3>
										<p>{w.desc}</p>
										<div className='work-meta'>
											{w.meta.map((m) => (
												<div className='m' key={m.label}>
													{m.label} <b>{m.value}</b>
												</div>
											))}
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* WHY US */}
				<section id='devops' className='devops'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>Why Mission JEET</span>
							<h2>Built for consistency, not just content.</h2>
							<p>
								Recorded lectures are everywhere. What actually moves a rank is a fixed daily
								routine, honest feedback on where you stand, and a mentor who notices when you
								fall behind.
							</p>
						</div>

						<div className='devops-grid'>
							<div>
								<h3 style={{ fontSize: 22 }}>What every student gets</h3>
								<p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7 }}>
									A daily live-class timetable across Physics, Chemistry and Maths, weekly
									full-syllabus tests with All-India rank comparison, a dedicated mentor for
									1:1 check-ins, and curated notes and question banks — accessible on web and
									our mobile app, with offline downloads for patchy connections.
								</p>

								<div className='stat-row'>
									<div className='stat'>
										<div className='num'>Daily</div>
										<div className='lbl'>Live class timetable</div>
									</div>
									<div className='stat'>
										<div className='num'>50+</div>
										<div className='lbl'>Tests per year</div>
									</div>
									<div className='stat'>
										<div className='num'>1:1</div>
										<div className='lbl'>Mentor check-ins</div>
									</div>
									<div className='stat'>
										<div className='num'>App</div>
										<div className='lbl'>iOS & Android, offline-ready</div>
									</div>
								</div>

								<div className='cap-grid'>
									{CAPABILITIES.map((c) => (
										<div className='cap' key={c.title}>
											<div className='dot' />
											<div>
												<b>{c.title}</b>
												<span>{c.desc}</span>
											</div>
										</div>
									))}
								</div>

								<div style={{ marginTop: 24 }}>
									<div className='eyebrow' style={{ marginBottom: 10 }}>
										Everything included
									</div>
									<div className='tech-pills'>
										{TECH_STACK.map((t) => (
											<span className='pill' key={t}>
												{t}
											</span>
										))}
									</div>
								</div>
							</div>

							<aside>
								<div className='arch-card'>
									<span className='eyebrow'>Test series</span>
									<h3 style={{ marginTop: 10 }}>
										Tests modelled on the real JEE pattern, evaluated instantly
									</h3>
									<p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.65 }}>
										Chapter-wise and full-syllabus mocks, instant scoring, detailed solutions,
										and an All-India rank comparison after every attempt — so you always know
										exactly where you stand.
									</p>
									<Shot
										src='screenshots/devops-case-study.svg'
										title='Test Series & Rank Dashboard'
										variant='arch-shot'
									/>

									<div style={{ marginTop: 18 }}>
										<div className='cap' style={{ background: 'var(--bg-soft)' }}>
											<div className='dot' />
											<div>
												<b>Outcome</b>
												<span>
													Students see exactly which chapters are costing them rank —
													and a mentor to help close those gaps before the next test.
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className='arch-card' style={{ marginTop: 18 }}>
									<span className='eyebrow'>Doubt solving & mentorship</span>
									<h3 style={{ marginTop: 10, fontSize: 18 }}>
										A mentor who actually knows your progress
									</h3>
									<p style={{ marginTop: 6, fontSize: 14, lineHeight: 1.65 }}>
										Live doubt solving during class, an async forum for everything else, and
										weekly 1:1 mentor check-ins to review scores, weak topics and study plans.
									</p>
									<div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
										<div className='cap' style={{ background: 'var(--bg-soft)' }}>
											<div className='dot' />
											<div>
												<b>Doubt solving</b>
												<span>
													In-class live Q&A, plus an async doubt forum with mentor
													replies within hours.
												</span>
											</div>
										</div>
										<div className='cap' style={{ background: 'var(--bg-soft)' }}>
											<div className='dot' />
											<div>
												<b>Parent visibility</b>
												<span>
													Regular progress reports so parents stay informed without
													chasing anyone for updates.
												</span>
											</div>
										</div>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</section>

				{/* PROCESS */}
				<section id='process'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>How it works</span>
							<h2>Getting started is simple.</h2>
							<p>Free demo class first. No commitment until you know it's a fit.</p>
						</div>

						<div className='process-grid'>
							{PROCESS_STEPS.map((s) => (
								<div className='step' key={s.n}>
									<div className='n'>STEP / {s.n}</div>
									<h4>{s.title}</h4>
									<p>{s.desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CONTACT */}
				<section id='contact' style={{ borderTop: 'none', paddingTop: 0 }}>
					<div className='container'>
						<div className='cta'>
							<div>
								<span className='eyebrow' style={{ color: '#fff', opacity: 0.7 }}>
									Book a free demo class
								</span>
								<h2 style={{ marginTop: 14 }}>
									Ready to start preparing
									<br />
									the right way?
								</h2>
								<p>
									Tell us your target exam and current class. We&rsquo;ll get back within one
									business day with a free demo class slot.
								</p>
								<ContactForm />
							</div>
							<div
								className='cta-side'
								style={{
									fontFamily: 'JetBrains Mono, monospace',
									fontSize: 13,
									color: 'rgba(255,255,255,0.8)',
								}}
							>
								<Row k='Email' v='devansh@nexttoppers.com' />
								<Row k='Based in' v='India · IST (UTC +5:30)' />
								<Row k='Hours' v='Mon – Sat · 10:00 – 19:00 IST' />
								<Row k='Response' v='< 24 hours' />
								<Row k='Demo class' v='Free, no commitment' />
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className='container foot'>
					<div>© {new Date().getFullYear()} Mission JEET. All rights reserved.</div>
					<div>
						<a href='#services'>Courses</a> &nbsp;·&nbsp;
						<a href='#work'>Results</a> &nbsp;·&nbsp;
						<a href='#devops'>Why Us</a> &nbsp;·&nbsp;
						<a href='#contact'>Contact</a>
					</div>
				</div>
			</footer>
		</>
	);
}

function Row({ k, v }: { k: string; v: string }) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '10px 0',
				borderBottom: '1px dashed rgba(255,255,255,0.12)',
			}}
		>
			<span style={{ color: 'rgba(255,255,255,0.5)' }}>{k}</span>
			<span>{v}</span>
		</div>
	);
}
