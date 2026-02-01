import { IMAGE_CATEGORIES } from '@/lib/image-sources';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    authorImage: string;
    date: string;
    readTime: string;
    category: string;
}

const AUTHOR_IMAGES = {
    'Dr. Mehmet Yılmaz': '/assets/stories/michael-profile.png',
    'Dr. Ayşe Demir': '/assets/stories/sarah-profile.png',
    'Dr. Can Öztürk': '/assets/stories/ahmed-profile.png',
    'Dr. Elif Kara': '/assets/stories/lisa-profile.png',
    'Emma Thompson': '/assets/stories/emma-profile.png',
    'Sarah Mitchell': '/assets/stories/sarah-profile.png',
    'Michael Rodriguez': '/assets/stories/michael-profile.png',
    'Dr. Zeynep Kaya': '/assets/stories/lisa-profile.png',
    'Dr. Burak Yildiz': '/assets/stories/carlos-profile.png'
};

export const blogPosts: BlogPost[] = [
    {
        slug: 'complete-guide-dental-tourism-turkey-2024',
        title: 'The Complete Guide to Dental Tourism in Turkey: What You Need to Know in 2024',
        excerpt: 'Comprehensive insights into why Turkey has become the world\'s leading destination for dental treatments.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.dental_tourism_guide,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'January 15, 2024',
        readTime: '12 min read',
        category: 'Dental Tourism',
        content: `
## Why Turkey? The Global Dental Hub

Turkey has emerged as the global epicenter for dental tourism, attracting over 1 million medical tourists annually. The combination of state-of-the-art facilities, highly skilled dentists, and significant cost savings makes it an irresistible choice for patients from the UK, USA, and Europe.

### 1. World-Class Quality
Turkish dental clinics are renowned for their high standards. Many are JCI-accredited and equipped with the latest technology, such as:
*   **3D CBCT Scanners** for precise diagnosis.
*   **CAD/CAM Milling Machines** for same-day crowns.
*   **Digital Smile Design** software to preview results.

### 2. Unbeatable Value
Patients can save **up to 70%** compared to prices in their home countries. This isn't due to lower quality, but rather lower operating costs in Turkey.
*   **Veneers:** £200 in Turkey vs £900+ in UK
*   **Implants:** £400 in Turkey vs £2000+ in UK

### 3. The "Vacation" Aspect
Antalya, known as the "Turkish Riviera," offers stunning beaches, luxury resorts, and rich history. Most patients combine their treatment with a relaxing holiday.

## Planning Your Trip: Step-by-Step

### Step 1: Research & Consultation
Start by sending your X-rays and photos to potential clinics. Professional clinics offer free video consultations and detailed treatment plans before you even book a flight.

### Step 2: Booking
Once you choose a clinic, they often arrange everything except your flight. This includes:
*   VIP Airport Transfers
*   5-Star Hotel Accommodation
*   Daily shuttle between hotel and clinic

### Step 3: Treatment Timeline
Most cosmetic treatments (veneers, crowns) require a **5-7 day stay**. Implants may require two visits separated by 3-6 months for healing, though immediate loading (All-on-4) is possible in some cases.
        `
    },
    {
        slug: 'veneers-vs-crowns-comparison',
        title: 'Veneers vs. Dental Crowns: Which Is Right for You?',
        excerpt: 'A detailed comparison of these two popular cosmetic dentistry options.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.veneers_vs_crowns,
        author: 'Dr. Ayşe Demir',
        authorImage: AUTHOR_IMAGES['Dr. Ayşe Demir'],
        date: 'January 10, 2024',
        readTime: '8 min read',
        category: 'Treatment Guides',
        content: `
## Understanding the Difference

When it comes to transforming your smile, veneers and crowns are the two most popular options. While both can improve the aesthetics of your teeth, they serve different purposes and structural needs.

### What are Dental Veneers?
Dental veneers are thin shells of porcelain or composite resin that are custom-made to fit over the front surface of your teeth. They are primarily used for cosmetic purposes to correct:
*   Discoloration that cannot be fixed with whitening
*   Chipped or broken teeth
*   Misaligned or uneven teeth
*   Gaps between teeth
        `
    },
    {
        slug: 'all-on-4-implants-guide',
        title: 'All-on-4 Dental Implants: Everything You Need to Know',
        excerpt: 'The revolutionary technique that replaces a full arch of teeth with just four implants.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.all_on_4_guide,
        author: 'Dr. Can Öztürk',
        authorImage: AUTHOR_IMAGES['Dr. Can Öztürk'],
        date: 'January 5, 2024',
        readTime: '10 min read',
        category: 'Implant Solutions',
        content: `
## What is All-on-4?
All-on-4 is a revolutionary dental implant technique that allows for the total rehabilitation of an edentulous (toothless) arch with just four dental implants. This procedure provides patients with a fixed, full-arch prosthesis on the same day as the surgery.

### The Procedure
1.  **Consultation & CT Scan:** A 3D CBCT scan is taken to evaluate bone density and plan implant placement.
2.  **Surgery:** Four implants are placed in the jawbone.
3.  **Temporary Teeth:** A temporary set of fixed teeth is attached to the implants immediately.
        `
    },
    {
        slug: 'choosing-dental-clinic-turkey',
        title: 'How to Choose the Right Dental Clinic in Turkey',
        excerpt: 'Key factors to evaluate when selecting a dental provider in Turkey.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.choosing_clinic,
        author: 'Sarah Mitchell',
        authorImage: AUTHOR_IMAGES['Sarah Mitchell'],
        date: 'December 28, 2023',
        readTime: '7 min read',
        category: 'Patient Resources',
        content: `
## Why Research Matters
With thousands of clinics in Turkey, choosing the right one can be overwhelming. Quality varies, and your health is paramount.

### Criteria to Check:
1.  **International Accreditation:** Look for JCI or ISO certifications.
2.  **Dentist Credentials:** Check if the dentists are members of the Turkish Dental Association (TDB).
3.  **Technology:** Does the clinic use 3D CBCT scanners and CAD/CAM?
        `
    },
    {
        slug: 'teeth-whitening-science-explained',
        title: 'The Science Behind Teeth Whitening',
        excerpt: 'Understanding the chemistry of teeth whitening and why professional treatments deliver superior results.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.whitening_science,
        author: 'Dr. Elif Kara',
        authorImage: AUTHOR_IMAGES['Dr. Elif Kara'],
        date: 'December 20, 2023',
        readTime: '6 min read',
        category: 'Cosmetic Dentistry',
        content: `
## How Teeth Whitening Works
Teeth whitening essentially involves a chemical reaction that breaks apart the carbon bonds that create yellow stains on enamel. The active ingredient is usually **hydrogen peroxide** or **carbamide peroxide**.

When these peroxides penetrate the enamel, they oxidize the pigments, making them colorless.
        `
    },
    {
        slug: 'dental-implant-recovery-timeline',
        title: 'Dental Implant Recovery: A Week-by-Week Timeline',
        excerpt: 'What to expect during the healing process, from surgery day through complete osseointegration.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.implant_recovery,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'December 15, 2023',
        readTime: '9 min read',
        category: 'Recovery Guides',
        content: `
## The Healing Journey
Recovering from dental implants requires patience for the biological process of **osseointegration** (bone fusing to implant) to occur.

### Day 1-3: The Immediate Aftermath
*   **Swelling:** Peaks around day 2 or 3. Use ice packs.
*   **Diet:** Liquid and cool foods only.
*   **Activity:** Rest and elevate your head.
        `
    },
    {
        slug: 'dental-tourism-misconceptions',
        title: '5 Common Misconceptions About Dental Tourism Debunked',
        excerpt: 'Separating fact from fiction about dental work abroad.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.tourism_myths,
        author: 'Emma Thompson',
        authorImage: AUTHOR_IMAGES['Emma Thompson'],
        date: 'December 8, 2023',
        readTime: '5 min read',
        category: 'Dental Tourism',
        content: `
## Myth 1: "Cheap Prices Mean Low Quality"
**Reality:** The lower cost in Turkey (up to 70%) is due to lower operating costs, not lower quality materials.

## Myth 2: "Language Will Be a Barrier"
**Reality:** Reputable dental tourism clinics are designed for international patients with dedicated coordinators.
        `
    },
    {
        slug: 'digital-smile-design-explained',
        title: 'Digital Smile Design: How Technology Previews Your Perfect Smile',
        excerpt: 'Advanced software creates a virtual mockup of your future smile before any treatment begins.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.digital_smile_design,
        author: 'Dr. Ayşe Demir',
        authorImage: AUTHOR_IMAGES['Dr. Ayşe Demir'],
        date: 'December 1, 2023',
        readTime: '7 min read',
        category: 'Technology',
        content: `
## Seeing Is Believing
**Digital Smile Design (DSD)** is a protocol that uses photo and video analysis to design a smile that fits your unique facial features and personality.

### The Process
1.  **Photo & Video Protocol:** High-resolution photos and videos.
2.  **Digital Planning:** Designing ideal shape, size, and position.
        `
    },
    {
        slug: 'comparing-dental-destinations',
        title: 'Comparing Dental Tourism Destinations: Turkey vs. Mexico vs. Hungary',
        excerpt: 'An objective analysis of the top three dental tourism countries.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.destination_comparison,
        author: 'Michael Rodriguez',
        authorImage: AUTHOR_IMAGES['Michael Rodriguez'],
        date: 'November 24, 2023',
        readTime: '11 min read',
        category: 'Dental Tourism',
        content: `
## The Global Leaders
While many countries offer dental tourism, Turkey, Mexico, and Hungary are the "Big Three."

### Turkey 🇹🇷
*   **Best For:** Complete smile makeovers, implants, luxury.
*   **Pros:** World-class aesthetics, all-inclusive packages.
*   **Cost Savings:** 70% vs UK/USA.
        `
    },
    {
        slug: 'veneer-cost-comparison-2024',
        title: 'The Real Cost of Dental Veneers: 2024 Price Breakdown',
        excerpt: 'A transparent comparison of veneer costs across major markets.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.cost_breakdown,
        author: 'Dr. Can Öztürk',
        authorImage: AUTHOR_IMAGES['Dr. Can Öztürk'],
        date: 'November 18, 2023',
        readTime: '8 min read',
        category: 'Cost Guides',
        content: `
## Price Breakdown (Per Tooth)
| Location | Composite | Porcelain (E-max) |
| :--- | :--- | :--- |
| **UK** | £250 - £500 | £700 - £1,200 |
| **Turkey**| €150 - €200 | €220 - €300 |

## Why the Difference?
It is **not** material quality. It is due to lower dentist fees and in-house lab costs in Turkey.
        `
    },
    {
        slug: 'complete-guide-dental-implants',
        title: 'Complete Guide to Dental Implants: Types, Process, and Success Rates',
        excerpt: 'Everything you need to know about dental implants.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.dental_implant_hero,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'January 12, 2024',
        readTime: '11 min read',
        category: 'Treatment Guides',
        content: `
## What Are Dental Implants?
Dental implants are titanium posts surgically placed into the jawbone.

### Types of Implants
*   **Endosteal:** Placed in jawbone.
*   **Zygomatic:** Anchored in cheekbone (for severe bone loss).
        `
    },
    {
        slug: 'invisalign-vs-traditional-braces',
        title: 'Invisalign vs. Traditional Braces: Complete Comparison 2024',
        excerpt: 'Clear aligners or metal braces? Compare effectiveness, cost, and comfort.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.invisalign_vs_braces,
        author: 'Dr. Ayşe Demir',
        authorImage: AUTHOR_IMAGES['Dr. Ayşe Demir'],
        date: 'January 8, 2024',
        readTime: '9 min read',
        category: 'Treatment Guides',
        content: `
## The Great Orthodontic Debate
Choosing between Invisalign and traditional braces depends on your specific case.

### Invisalign
**Pros**: Nearly invisible, removable.
**Cons**: More expensive, requires discipline.

### Braces
**Pros**: Effective for complex cases, cannot be lost.
**Cons**: Visible, dietary restrictions.
        `
    },
    {
        slug: 'root-canal-treatment-explained',
        title: 'Root Canal Treatment Explained: Process, Pain, and Recovery',
        excerpt: 'Demystifying root canals - what actually happens and modern pain management.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.root_canal,
        author: 'Dr. Can Öztürk',
        authorImage: AUTHOR_IMAGES['Dr. Can Öztürk'],
        date: 'January 3, 2024',
        readTime: '8 min read',
        category: 'Treatment Guides',
        content: `
## What Is a Root Canal?
A treatment to repair and save a badly damaged or infected tooth.

### Steps
1.  **Diagnosis:** X-rays.
2.  **Anesthesia:** Local anesthetic.
3.  **Pulpectomy:** Removing the infected pulp.
4.  **Filling:** Sealing the canal.
        `
    },
    {
        slug: 'composite-bonding-benefits',
        title: 'Composite Bonding: The Fast, Affordable Smile Makeover',
        excerpt: 'Transform your smile in one visit with composite bonding.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.composite_bonding,
        author: 'Dr. Elif Kara',
        authorImage: AUTHOR_IMAGES['Dr. Elif Kara'],
        date: 'December 30, 2023',
        readTime: '7 min read',
        category: 'Treatment Guides',
        content: `
## What Is Composite Bonding?
Applying tooth-colored resin material to improve appearance.

### What Can It Fix?
*   Chipped or cracked teeth
*   Gaps
*   Discoloration
        `
    },
    {
        slug: 'gum-disease-treatment-options',
        title: 'Gum Disease Treatment: From Deep Cleaning to Surgery',
        excerpt: 'Understanding periodontitis stages and treatment options.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.gum_disease,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'December 25, 2023',
        readTime: '10 min read',
        category: 'Treatment Guides',
        content: `
## Understanding Gum Disease
Gum disease is an infection of the tissues holding your teeth in place.

### Stages
1.  **Gingivitis:** Reversible, red gums.
2.  **Periodontitis:** Bone loss, gum recession.
        `
    },
    {
        slug: 'full-mouth-reconstruction-process',
        title: 'Full Mouth Reconstruction: Complete Process and Timeline',
        excerpt: 'Comprehensive guide to restoring your entire smile with implants, veneers, and crowns.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.full_mouth_recon,
        author: 'Dr. Can Öztürk',
        authorImage: AUTHOR_IMAGES['Dr. Can Öztürk'],
        date: 'December 22, 2023',
        readTime: '12 min read',
        category: 'Treatment Guides',
        content: `
## What Is Full Mouth Reconstruction?
A customized plan addressing all teeth in both jaws.

### Components
It may include implants, crowns, veneers, and bridges to restore function and aesthetics completely.
        `
    },
    {
        slug: 'hollywood-smile-package-details',
        title: 'Hollywood Smile Package: What\'s Included and Expected Results',
        excerpt: 'Everything about the famous Hollywood Smile transformation.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.hollywood_smile_pkg,
        author: 'Dr. Ayşe Demir',
        authorImage: AUTHOR_IMAGES['Dr. Ayşe Demir'],
        date: 'December 18, 2023',
        readTime: '8 min read',
        category: 'Treatment Guides',
        content: `
## What Is a Hollywood Smile?
A cosmetic dental makeover creating perfectly white, symmetrical teeth.

### Package Includes:
*   20-28 dental veneers
*   Professional whitening
*   Gum contouring
        `
    },
    {
        slug: 'teeth-extraction-wisdom-teeth-guide',
        title: 'Teeth Extraction and Wisdom Teeth: When, Why, and How',
        excerpt: 'Guide to tooth extraction and wisdom teeth removal.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.teeth_extraction,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'December 14, 2023',
        readTime: '9 min read',
        category: 'Treatment Guides',
        content: `
## When Is Extraction Necessary?
*   Severe decay
*   Impacted wisdom teeth
*   Overcrowding

### Recovery
Usually takes 3-5 days for simple extractions, up to 2 weeks for surgical ones.
        `
    },
    {
        slug: 'dental-bridges-vs-implants',
        title: 'Dental Bridges vs. Implants: Which Is Better for Missing Teeth?',
        excerpt: 'Comparison of bridges and implants.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.bridges_vs_implants,
        author: 'Dr. Can Öztürk',
        authorImage: AUTHOR_IMAGES['Dr. Can Öztürk'],
        date: 'December 11, 2023',
        readTime: '10 min read',
        category: 'Treatment Guides',
        content: `
## Bridges vs Implants
**Bridges** are faster but require grinding adjacent teeth.
**Implants** preserve bone and adjacent teeth, lasting a lifetime.
        `
    },
    {
        slug: 'porcelain-vs-emax-veneers',
        title: 'Porcelain vs. E-max Veneers: Material Comparison Guide',
        excerpt: 'Traditional porcelain vs. E-max ceramic veneers.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.porcelain_vs_emax,
        author: 'Dr. Ayşe Demir',
        authorImage: AUTHOR_IMAGES['Dr. Ayşe Demir'],
        date: 'December 7, 2023',
        readTime: '8 min read',
        category: 'Treatment Guides',
        content: `
## Material Comparison
**E-max:** Superior aesthetics, translucency, and strength. Ideal for front teeth.
**Zirconia:** Extremely durable, opaque. Good for back teeth or bruxism patients.
        `
    },
    {
        slug: 'snap-on-dentures-guide',
        title: 'Snap-On Dentures (Overdentures): Benefits and Process',
        excerpt: 'Implant-supported dentures for stability and comfort.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.snap_on_dentures,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'December 4, 2023',
        readTime: '9 min read',
        category: 'Treatment Guides',
        content: `
## Stay Secure
Snap-on dentures anchor to implants, eliminating slipping and the need for messy adhesives. They restore significantly more chewing power than traditional dentures.
        `
    },
    {
        slug: 'tmj-disorder-treatment-options',
        title: 'TMJ Disorder Treatment: Relief for Jaw Pain and Dysfunction',
        excerpt: 'Effective treatments for TMJ from conservative to surgical.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.tmj_treatment,
        author: 'Dr. Burak Yildiz',
        authorImage: AUTHOR_IMAGES['Dr. Burak Yildiz'],
        date: 'December 2, 2023',
        readTime: '10 min read',
        category: 'Treatment Guides',
        content: `
## Treating TMJ
Treatments include splint therapy (mouthguards), Botox injections for muscle relaxation, and physical therapy. Surgery is a last resort.
        `
    },
    {
        slug: 'pediatric-dentistry-parents-guide',
        title: 'Pediatric Dentistry Basics: A Parent\'s Complete Guide',
        excerpt: 'Information for children\'s dental health.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.pediatric_dentistry,
        author: 'Dr. Zeynep Kaya',
        authorImage: AUTHOR_IMAGES['Dr. Zeynep Kaya'],
        date: 'November 29, 2023',
        readTime: '11 min read',
        category: 'Treatment Guides',
        content: `
## Start Early
First visit should be by age 1. Focus on fluoride, sealants, and early orthodontic screening to ensure a lifetime of healthy smiles.
        `
    },
    {
        slug: 'best-time-visit-turkey-dental',
        title: 'Best Time to Visit Turkey for Dental Work: Weather, Costs, and Tourism',
        excerpt: 'Best seasons to visit for treatment and sightseeing.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.best_time_turkey,
        author: 'Emma Thompson',
        authorImage: AUTHOR_IMAGES['Emma Thompson'],
        date: 'November 25, 2023',
        readTime: '8 min read',
        category: 'Dental Tourism',
        content: `
## Seasonal Guide
*   **Spring/Autumn:** Best weather.
*   **Winter:** Lowest Hotel prices.
*   **Summer:** Great for beach lovers, but hot and busy.
        `
    },
    {
        slug: 'what-to-pack-dental-trip',
        title: 'What to Pack for Your Dental Tourism Trip to Turkey',
        excerpt: 'Essential packing list for dental patients.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.packing_tips,
        author: 'Sarah Mitchell',
        authorImage: AUTHOR_IMAGES['Sarah Mitchell'],
        date: 'November 20, 2023',
        readTime: '7 min read',
        category: 'Dental Tourism',
        content: `
## Packing Essentials
*   **Documents:** Passport, X-rays.
*   **Comfort:** Lip balm, neck pillow, soft foods/snacks for recovery.
        `
    },
    {
        slug: 'post-treatment-travel-tips',
        title: 'Post-Treatment Travel Tips: What to Do After Dental Procedures Abroad',
        excerpt: 'How to enjoy Turkey while healing.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.post_treatment_travel,
        author: 'Michael Rodriguez',
        authorImage: AUTHOR_IMAGES['Michael Rodriguez'],
        date: 'November 15, 2023',
        readTime: '9 min read',
        category: 'Dental Tourism',
        content: `
## Safe Activities
*   **Do:** Museums, boat tours (shade), shopping.
*   **Don't:** Heavy lifting, extreme heat, swimming immediately after surgery.
        `
    },
    {
        slug: 'insurance-dental-tourism-coverage',
        title: 'Insurance and Dental Tourism: Coverage, Claims, and What to Know',
        excerpt: 'Understanding insurance for international treatment.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.insurance_coverage,
        author: 'Emma Thompson',
        authorImage: AUTHOR_IMAGES['Emma Thompson'],
        date: 'November 10, 2023',
        readTime: '10 min read',
        category: 'Dental Tourism',
        content: `
## Policy Check
Most domestic insurance doesn't cover international work. However, some global policies (Cigna Global, etc.) might. Always check your policy terms.
        `
    },
    {
        slug: 'language-barriers-dental-clinics',
        title: 'Language Barriers in Dental Tourism: Communication in Turkish Clinics',
        excerpt: 'How clinics handle international patients.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.language_barriers,
        author: 'Sarah Mitchell',
        authorImage: AUTHOR_IMAGES['Sarah Mitchell'],
        date: 'November 5, 2023',
        readTime: '7 min read',
        category: 'Dental Tourism',
        content: `
## No Barriers
Top clinics provide personal patient coordinators who speak your language. Most cosmetic dentists are also fluent in English.
        `
    },
    {
        slug: 'combining-dental-vacation-turkey',
        title: 'Combining Dental Treatment with Turkish Vacation: Perfect Package Planning',
        excerpt: 'Maximizing your trip.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.combining_vacation,
        author: 'Michael Rodriguez',
        authorImage: AUTHOR_IMAGES['Michael Rodriguez'],
        date: 'November 1, 2023',
        readTime: '9 min read',
        category: 'Dental Tourism',
        content: `
## Complete Experience
Plan your treatment days first, then schedule leisure. Visit historical sites like Ephesus or relax on Antalya's beaches during your downtime.
        `
    },
    {
        slug: 'choosing-hotel-dental-tourism',
        title: 'Choosing the Right Hotel for Dental Tourism in Turkey',
        excerpt: 'Accommodation tips for recovery and comfort.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.choosing_hotel,
        author: 'Sarah Mitchell',
        authorImage: AUTHOR_IMAGES['Sarah Mitchell'],
        date: 'October 28, 2023',
        readTime: '6 min read',
        category: 'Dental Tourism',
        content: `
## Location is Key
Choose a hotel close to your clinic or one that offers shuttle services. Look for room service availability for days when you prefer not to dine out.
        `
    },
    {
        slug: 'turkish-culture-etiquette-guide',
        title: 'Turkish Culture & Etiquette Guide for Dental Tourists',
        excerpt: 'Navigating local customs for a respectful trip.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.culture_etiquette,
        author: 'Emma Thompson',
        authorImage: AUTHOR_IMAGES['Emma Thompson'],
        date: 'October 25, 2023',
        readTime: '8 min read',
        category: 'Dental Tourism',
        content: `
## Warm Hospitality
Turkish culture is famous for hospitality. Tea is often offered - it's polite to accept. Dress modestly when visiting mosques.
        `
    },
    {
        slug: 'dental-implants-cost-guide-5-years',
        title: 'Dental Implants Cost Guide: Turkey vs. Europe Over 5 Years',
        excerpt: 'Long-term value analysis of getting implants abroad.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.implants_cost_5yr,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'October 20, 2023',
        readTime: '12 min read',
        category: 'Cost Guides',
        content: `
## Long Term Savings
Even with travel costs and potential follow-ups, the 5-year cost of implants in Turkey is significantly lower than in Europe, often saving patients enough to buy a small car.
        `
    },
    {
        slug: 'understanding-dental-treatment-plan',
        title: 'Understanding Your Dental Treatment Plan: A Patient\'s Guide',
        excerpt: 'How to read and interpret your dental quotation.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.treatment_plan,
        author: 'Sarah Mitchell',
        authorImage: AUTHOR_IMAGES['Sarah Mitchell'],
        date: 'October 15, 2023',
        readTime: '7 min read',
        category: 'Patient Resources',
        content: `
## Decoding the Plan
We explain what each line item means, from "abutment" to "zirconia crown", so you know exactly what you are paying for.
        `
    },
    {
        slug: 'dental-anxiety-management',
        title: 'Dental Anxiety: How We Make Your Visit Comfortable',
        excerpt: 'Overcoming fear of the dentist with our compassionate care.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.dental_anxiety,
        author: 'Dr. Elif Kara',
        authorImage: AUTHOR_IMAGES['Dr. Elif Kara'],
        date: 'October 10, 2023',
        readTime: '6 min read',
        category: 'Patient Resources',
        content: `
## Fear-Free Dentistry
We offer sedation options and a calming spa-like environment. Our staff is trained to handle anxious patients with patience and care.
        `
    },
    {
        slug: 'diet-nutrition-healthy-teeth',
        title: 'Diet and Nutrition for Healthy Teeth: Beyond Sugar',
        excerpt: 'Foods that strengthen enamel and promote gum health.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.diet_nutrition,
        author: 'Dr. Zeynep Kaya',
        authorImage: AUTHOR_IMAGES['Dr. Zeynep Kaya'],
        date: 'October 5, 2023',
        readTime: '8 min read',
        category: 'Patient Resources',
        content: `
## Eat for Your Smile
Calcium-rich foods, crunchy vegetables, and water are your teeth's best friends. Avoid sticky candies and acidic sodas.
        `
    },
    {
        slug: 'care-for-new-veneers',
        title: 'How to Care for Your New Veneers: The Golden Rules',
        excerpt: 'Maintenance tips to make your veneers last 15+ years.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.veneers_care,
        author: 'Dr. Ayşe Demir',
        authorImage: AUTHOR_IMAGES['Dr. Ayşe Demir'],
        date: 'October 1, 2023',
        readTime: '7 min read',
        category: 'Patient Resources',
        content: `
## Daily Care
Treat them like natural teeth. Brush, floss, and wear a nightguard if you grind your teeth. Avoid biting hard objects or opening packages with your teeth.
        `
    },
    {
        slug: 'hidden-costs-dental-tourism',
        title: 'Hidden Costs to Watch Out For in Dental Tourism',
        excerpt: 'Be prepared for extra expenses to budget accurately.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.hidden_costs,
        author: 'Michael Rodriguez',
        authorImage: AUTHOR_IMAGES['Michael Rodriguez'],
        date: 'September 25, 2023',
        readTime: '9 min read',
        category: 'Cost Guides',
        content: `
## Budget Smart
Consider flight changes, extra hotel nights, dining out, and potential medication costs. We believe in transparent pricing, but travel variables exist.
        `
    },
    {
        slug: 'financing-dental-treatment-turkey',
        title: 'Financing Your Dental Treatment in Turkey',
        excerpt: ' Payment plans and options for international patients.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.financing_options,
        author: 'Sarah Mitchell',
        authorImage: AUTHOR_IMAGES['Sarah Mitchell'],
        date: 'September 20, 2023',
        readTime: '6 min read',
        category: 'Cost Guides',
        content: `
## Payment Options
Most clinics accept cash (Euros, Pounds, Dollars) and credit cards. Some offer partnerships with medical financing companies in your home country.
        `
    },
    {
        slug: 'comprehensive-savings-analysis',
        title: 'How Much Can You Save? A Comprehensive Savings Analysis',
        excerpt: 'Detailed breakdown of potential savings for major procedures.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.savings_analysis,
        author: 'Michael Rodriguez',
        authorImage: AUTHOR_IMAGES['Michael Rodriguez'],
        date: 'September 15, 2023',
        readTime: '10 min read',
        category: 'Cost Guides',
        content: `
## Big Picture
For a full mouth restoration, savings can exceed $20,000, even after factoring in a luxury vacation for two.
        `
    },
    {
        slug: 'currency-exchange-rates-guide',
        title: 'Understanding Currency Exchange Rates for Dental Patients',
        excerpt: 'How to get the best value when paying for treatment.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.currency_exchange,
        author: 'Michael Rodriguez',
        authorImage: AUTHOR_IMAGES['Michael Rodriguez'],
        date: 'September 10, 2023',
        readTime: '7 min read',
        category: 'Cost Guides',
        content: `
## Currency Tips
Pay in the currency quoted to avoid poor exchange rates. Withdrawal limits at ATMs can be tricky; plan ahead.
        `
    },
    {
        slug: 'safety-in-turkey-dental-work',
        title: 'Safety in Turkey: Is it Safe to Travel for Dental Work?',
        excerpt: ' Addressing safety concerns for medical tourists.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.safety_turkey,
        author: 'Emma Thompson',
        authorImage: AUTHOR_IMAGES['Emma Thompson'],
        date: 'September 5, 2023',
        readTime: '6 min read',
        category: 'Dental Tourism',
        content: `
## Safe & Secure
Turkey is a major tourist destination. Dental clinics are situated in safe, modern districts. Standard travel precautions apply, but medical tourism zones are very secure.
        `
    },
    {
        slug: 'regular-checkups-after-treatment',
        title: 'The Importance of Regular Checkups After Treatment',
        excerpt: 'Maintaining your results with local care.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.regular_checkups,
        author: 'Dr. Burak Yildiz',
        authorImage: AUTHOR_IMAGES['Dr. Burak Yildiz'],
        date: 'September 1, 2023',
        readTime: '5 min read',
        category: 'Patient Resources',
        content: `
## Follow Up
Visit your local dentist every 6 months for cleaning and exams. They can maintain your Turkish dental work perfectly well.
        `
    },
    {
        slug: 'warranty-policies-smile-turkiye',
        title: 'Warranty Policies at Smile Turkiye: What Is Covered?',
        excerpt: 'Understanding the guarantee on your dental work.',
        image: IMAGE_CATEGORIES.BLOG_COVERS.warranty_policies,
        author: 'Dr. Mehmet Yılmaz',
        authorImage: AUTHOR_IMAGES['Dr. Mehmet Yılmaz'],
        date: 'August 28, 2023',
        readTime: '6 min read',
        category: 'Patient Resources',
        content: `
## Our Promise
We offer a 5-year warranty on veneers and a lifetime warranty on implants, provided you attend regular checkups and follow care instructions.
        `
    }
];
