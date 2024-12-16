# The 4-Shot Prompt for Auto Maintenance Landing Page
## Prompt 1: Design System & Global Setup
Initialize a Next.js 13+ project with Tailwind CSS and ShadCN components. Set up the following design system:
Colors:
	•	Primary background: #161616
	•	Secondary background: #121212
	•	Accent: #FD6527 (orange)
	•	Body text: var(--body-text-color) = #EDEDED
Typography:
	•	Primary font: Chakra Petch for headings
	•	Secondary font: Mulish for body (18px, line-height: 26px, letter-spacing: 0px)
	•	Stats numbers: 66px Chakra Petch
Global Patterns:
	•	No rounded corners unless specified
	•	Hover states use orange accent
	•	Semi-transparent black overlays (50%) on image containers
	•	Thin white lines (0.5px) above cards that turn orange on hover
## Prompt 2: Assets & Resources
Image assets with their exact paths:
	1.	Logo: logo.png (header & footer)
	2.	Car cleaning section:
	▪	detailing-manual-cleaning.jpg
	▪	car-detailing-polishing.jpg
	3.	Maintenance section:
	▪	car-maintenance-and-repair.jpg
	4.	Blog grid:
	▪	car-battery-check.jpg
	▪	dark-luxury-car-interior.jpg
	▪	check-engine-control-light.jpeg
	▪	car-safety-accessories-2.jpg
Icons needed:
	1.	Service section: brake, battery, steering icons
	2.	Social media icons for footer
	3.	Orange play button overlay for video section
	4.	Calendar and clock icons (white) for appointment form
## Prompt 3: Section Specifications
Implement the following sections in order:
	1.	Header:
	▪	Logo left
	▪	Navigation center
	▪	Phone number right
	▪	Sticky, transparent background
	2.	Hero:
	▪	Left: Heading + CTA button
	▪	Right: Diagonal stripe pattern
	▪	Stats bar below: 4 stats with 66px numbers
	3.	Services Grid:
	▪	3x2 grid
	▪	Icon top
	▪	Title (Chakra Petch)
	▪	Description
	▪	"Details Service" link in orange
	4.	Maintenance Video:
	▪	Full-width container
	▪	Background image with overlay
	▪	Centered play button
	5.	Pricing Cards:
	▪	Two-column layout
	▪	Dark background (#121212)
	▪	Feature list with checkmarks
	▪	"Get Started" CTA buttons
	6.	Car Cleaning:
	▪	Alternating image/content layout
	▪	Full-width sections
	▪	Orange CTA buttons
	▪	Black overlay on images
	7.	Service Steps:
	▪	Four-step process
	▪	Numbered circles in orange
	▪	White top borders
	▪	Two-column layout
	8.	Blog Grid:
	▪	Featured article (21:9)
	▪	Three smaller articles (16:9)
	▪	Hover effects
	▪	Category tags
	9.	Appointment Form:
	▪	Two-column layout
	▪	Custom input styling
	▪	White calendar/clock icons
	▪	Orange submit button
	10.	Footer:
	▪	Four-column layout
	▪	Logo
	▪	Navigation links
	▪	Contact info
	▪	Newsletter signup
## Prompt 4: Responsive Behavior & Interactions
Implement these responsive patterns:
Breakpoints:
	•	Mobile: < 768px
	•	Tablet: 768px - 1024px
	•	Desktop: > 1024px
Mobile Adjustments:
	1.	Single column layouts
	2.	Stacked grid items
	3.	Full-width images
	4.	Condensed navigation
	5.	Reduced padding/margins
Interactive Elements:
	1.	Hover states:
	▪	Orange color transition (0.3s)
	▪	Scale transform on cards
	▪	White to orange line transitions
	2.	Form Elements:
	▪	Orange focus states
	▪	White input icons
	▪	Smooth transitions
	3.	Image Containers:
	▪	Semi-transparent overlays
	▪	Text protection gradients
	▪	Maintain aspect ratios
Ensure all sections maintain visual hierarchy and spacing relationships across breakpoints.

