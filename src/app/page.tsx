import SocialLinks from '@/components/SocialLinks';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Hero Section */}
      <header className="py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">PRIJUN KOIRALA</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Creative Designer</h2>
          
          <div className="flex flex-col sm:flex-row gap-8 text-gray-600 mb-8">
            <div>
              <p>+46 763449828</p>
              <p>kprijun@gmail.com</p>
            </div>
            <div>
              <p>Kanslivägen 15, 14637</p>
              <p>Stockholm, Sweden</p>
            </div>
          </div>

          <SocialLinks />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-32">
        <div className="max-w-3xl">
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-1">Interactive Media Technology</h3>
              <p className="text-gray-600">KTH Royal Institute of Technology</p>
              <p className="text-gray-600">Master's Degree • 2023 - Present</p>
            </div>
          </section>

          <WorkExperience />
          <Skills />

          {/* Other Works Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Other Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Dream City, 2019</h3>
                <p className="text-gray-600">Role: UI/UX, Content Management</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Ride Through Sindhuligadhi, 2018</h3>
                <p className="text-gray-600">Role: Brand Identity</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
