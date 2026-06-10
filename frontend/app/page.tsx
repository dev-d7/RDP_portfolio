import React from 'react';
import Icon from '@/components/Icon';
import Shot from '@/components/Shot';
import ContactForm from '@/components/ContactForm';
import NavMobile from '@/components/NavMobile';
import { SERVICES, WORKS, CAPABILITIES, TECH_STACK, PROCESS_STEPS } from './data';

export default function HomePage() {
	return (
		<>
			{/* NAV */}
			<header className='nav'>
				<div className='container nav-inner'>
					<a className='brand' href='#top'>
						<span className='brand-mark'>R</span>
						<span>RDP</span>
					</a>
					<nav className='nav-links'>
						<a href='#services'>Services</a>
						<a href='#work'>Work</a>
						<a href='#devops'>Cloud &amp; DevOps</a>
						<a href='#process'>Process</a>
					</nav>
					<a className='nav-cta' href='#contact'>
						Start a project →
					</a>
					<NavMobile />
				</div>
			</header>

			<main id='top'>
				{/* HERO */}
				<section className='hero' style={{ borderTop: 'none' }}>
					<div className='container hero-grid'>
						<div>
							<span className='eyebrow'>RDP · Product engineering studio</span>
							<h1 style={{ marginTop: 18 }}>
								We build <span className='grad'>reliable digital products</span> — from idea to scale.
							</h1>
							<p className='lead'>
								RDP is a small, senior team shipping live streaming platforms, HRMS, online test
								engines, mobile apps with first-class deep linking, and the cloud infrastructure — DNS,
								routing, Kubernetes — that keeps them all running at scale. We design, build, and
								operate — so you can launch faster and sleep better.
							</p>
							<div className='hero-ctas'>
								<a className='btn btn-primary' href='#contact'>
									Book a discovery call <span className='arrow'>→</span>
								</a>
								<a className='btn' href='#work'>
									See our work
								</a>
							</div>
							<div className='hero-chips'>
								<span className='chip'>OTT &amp; Live Streaming</span>
								<span className='chip'>HRMS</span>
								<span className='chip'>EdTech &amp; Test Series</span>
								<span className='chip'>Deep Links · Push</span>
								<span className='chip'>iOS · Android</span>
								<span className='chip'>AWS · Kubernetes</span>
							</div>
						</div>
						<aside className='hero-card'>
							<div className='eyebrow' style={{ marginBottom: 14 }}>
								By the numbers
							</div>
							<div className='hero-stats'>
								<div className='stat'>
									<div className='num'>60K+</div>
									<div className='lbl'>Concurrent users supported</div>
								</div>
								<div className='stat'>
									<div className='num'>99.95%</div>
									<div className='lbl'>Production uptime target</div>
								</div>
								<div className='stat'>
									<div className='num'>3+ yrs</div>
									<div className='lbl'>Cloud &amp; DevOps experience</div>
								</div>
								<div className='stat'>
									<div className='num'>Zero</div>
									<div className='lbl'>Downtime deployments</div>
								</div>
							</div>
							<div style={{ marginTop: 18, fontSize: 12.5, color: 'var(--muted-2)', lineHeight: 1.6 }}>
								Production-grade infrastructure for OTT, EdTech and real-time communication — designed
								for traffic spikes, regulated workloads, and lean teams.
							</div>
						</aside>
					</div>
				</section>

				{/* TRUST */}
				<div className='trust'>
					<div className='container trust-inner'>
						<div className='trust-label'>Tech we ship with</div>
						<div className='trust-stack'>
							<span>AWS</span>
							<span>Kubernetes / EKS</span>
							<span>Docker</span>
							<span>Terraform</span>
							<span>GitHub Actions</span>
							<span>Redis</span>
							<span>EMQX</span>
							<span>Grafana · Prometheus</span>
							<span>Next.js</span>
							<span>NestJS</span>
							<span>React Native</span>
						</div>
					</div>
				</div>

				{/* SERVICES */}
				<section id='services'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>What we do</span>
							<h2>Full-stack product engineering, end to end.</h2>
							<p>
								From a first prototype to scaling past your first million users — we cover the product,
								the platform, and the operations behind them.
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

				{/* WORK */}
				<section id='work'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>Featured work</span>
							<h2>Products we&rsquo;ve helped design, build and operate.</h2>
							<p>
								A snapshot of recent engagements — spanning OTT streaming, enterprise HR platforms,
								high-traffic EdTech, cloud infrastructure, mobile deep linking and SEO-driven websites.
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

				{/* DEVOPS */}
				<section id='devops' className='devops'>
					<div className='container'>
						<div className='section-head'>
							<span className='eyebrow'>Cloud &amp; DevOps engineering</span>
							<h2>Infrastructure that scales when your traffic does.</h2>
							<p>
								Our DevOps lead has 3+ years designing and operating production-grade cloud-native
								systems on AWS — for OTT, EdTech and real-time communication products running at serious
								scale.
							</p>
						</div>

						<div className='devops-grid'>
							<div>
								<h3 style={{ fontSize: 22 }}>What we deliver</h3>
								<p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7 }}>
									Highly available Kubernetes platforms on Amazon EKS, automated CI/CD with
									zero-downtime deploys, multi-account AWS networking, infrastructure-as-code with
									Terraform, dynamic URL routing and DNS management, and observability stacks
									engineers actually trust.
								</p>

								<div className='stat-row'>
									<div className='stat'>
										<div className='num'>60K+</div>
										<div className='lbl'>Concurrent users architected</div>
									</div>
									<div className='stat'>
										<div className='num'>EKS</div>
										<div className='lbl'>Production Kubernetes clusters</div>
									</div>
									<div className='stat'>
										<div className='num'>IaC</div>
										<div className='lbl'>100% Terraform modules</div>
									</div>
									<div className='stat'>
										<div className='num'>24/7</div>
										<div className='lbl'>Observability &amp; on-call</div>
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
										Core stack
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
									<span className='eyebrow'>Case study</span>
									<h3 style={{ marginTop: 10 }}>
										Scaling a real-time platform to 60K+ concurrent users
									</h3>
									<p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.65 }}>
										EKS-backed microservices, EMQX for real-time chat, HPA + Cluster Autoscaler for
										elastic load handling, ALB/NLB load balancing, CloudFront and Redis caching, and
										a Grafana/Prometheus/PagerDuty stack closing the loop on alerts.
									</p>
									<Shot
										src='screenshots/devops-case-study.svg'
										title='Architecture / Dashboard Screenshot'
										variant='arch-shot'
									/>

									<div style={{ marginTop: 18 }}>
										<div className='cap' style={{ background: 'var(--bg-soft)' }}>
											<div className='dot' />
											<div>
												<b>Outcome</b>
												<span>
													Zero-downtime deploys, predictable scaling on peak events, and
													meaningful reduction in monthly AWS spend through right-sizing and
													caching.
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className='arch-card' style={{ marginTop: 18 }}>
									<span className='eyebrow'>Dynamic link engineering</span>
									<h3 style={{ marginTop: 10, fontSize: 18 }}>
										Deep links, URL routing &amp; dynamic DNS
									</h3>
									<p style={{ marginTop: 6, fontSize: 14, lineHeight: 1.65 }}>
										We own the full URL lifecycle — from Firebase Dynamic Links and Universal Links
										in mobile apps to CloudFront signed URLs, ALB path-based routing rules, and
										Route53 dynamic DNS for multi-tenant SaaS.
									</p>
									<div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
										<div className='cap' style={{ background: 'var(--bg-soft)' }}>
											<div className='dot' />
											<div>
												<b>Mobile deep linking</b>
												<span>
													Firebase Dynamic Links, Universal Links (iOS), App Links (Android),
													deferred install attribution.
												</span>
											</div>
										</div>
										<div className='cap' style={{ background: 'var(--bg-soft)' }}>
											<div className='dot' />
											<div>
												<b>Infrastructure routing</b>
												<span>
													ALB listener rules, Nginx URL rewrites, wildcard DNS, CloudFront
													signed URLs, multi-tenant subdomain routing.
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
							<span className='eyebrow'>How we work</span>
							<h2>A simple, predictable engagement.</h2>
							<p>One senior team. Weekly demos. Production-grade output. No black boxes.</p>
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
									Start a project
								</span>
								<h2 style={{ marginTop: 14 }}>
									Have a product to build or scale?
									<br />
									Let&rsquo;s talk.
								</h2>
								<p>
									Tell us what you&rsquo;re working on. We&rsquo;ll come back within one business day
									with a discovery call slot and a rough plan of attack.
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
								<Row k='Email' v='devanshdd77@gmail.com' />
								<Row k='Based in' v='India · IST (UTC +5:30)' />
								<Row k='Hours' v='Mon – Sat · 10:00 – 19:00 IST' />
								<Row k='Response' v='< 24 hours' />
								<Row k='Engagement' v='Fixed-scope or retainer' />
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className='container foot'>
					<div>© {new Date().getFullYear()} RDP. Built with care.</div>
					<div>
						<a href='#services'>Services</a> &nbsp;·&nbsp;
						<a href='#work'>Work</a> &nbsp;·&nbsp;
						<a href='#devops'>DevOps</a> &nbsp;·&nbsp;
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
