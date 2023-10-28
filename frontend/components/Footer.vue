<template>
  <footer class="relative">

    <!-- Bg -->
    <div class="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <!-- <img class="max-w-none" src="../images/footer-illustration.svg" width="1940" height="381" /> -->
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Blocks -->
      <div class="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
          <!-- Logo -->
          <router-link class="block" to="/" aria-label="Cruip">
            <div class="text-white dark:text-inherit font-bold">WorkTrends</div>
          </router-link>
        </div>

  
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Tech Work Trends</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li v-for="j in jobs[0]">
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">{{j}}</a>
            </li>
          </ul>
        </div>

        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Health Work Trends</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li v-for="j in jobs[1]">
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">{{j}}</a>
            </li>
          </ul>
        </div>
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Health Work Trends</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li v-for="j in jobs[2]">
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">{{j}}</a>
            </li>
          </ul>
        </div>
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Trades Work Trends</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li v-for="j in jobs[3]">
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">{{j}}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom area -->
      <div class="pb-4 md:pb-8">
        <div class="text-xs text-slate-500">
          If you would like to find out more about which entity you receive services from please click <a
            class="font-medium underline hover:text-blue-500 transition duration-150 ease-in-out" href="#0">here</a> If
          you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in
          the Republic of Ireland. Custom Bank is licensed by the European Central Bank and regulated by the Bank of
          Ireland. Cusom Bank provides credit, payment, current account and demand deposit account services.
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      jobs: [
        // Information Technology and Software Development
        [
          "Software Developer",
          "Web Developer",
          "UX/UI Designer",
          "Network Engineer",
          "IT Support Specialist",
          "Software Tester",
        ],
        // Healthcare and Medical
        [
          "Registered Nurse",
          "Dental Hygienist",
          "Physician Assistant",
          "Pharmacist",
          "Physical Therapist",
          "Occupational Therapist",
          "Physical Therapist Assistant",
          "Radiologic Technologist",
        ],
        // Business and Finance
        [
          "Data Analyst",
          "Financial Analyst",
          "Sales Representative",
          "Accountant",
          "Operations Manager",
          "HR Manager",
          "Financial Planner",
        ],
        // Engineering and Construction
        [
          "Electrician",
          "Mechanical Engineer",
          "Civil Engineer",
          "Construction Manager",
          "Architect",
        ],
        // Creative and Other Professions
        [
          "Graphic Designer",
          "Marketing Manager",
          "Social Media Manager",
          "Content Writer",
          "Teacher",
          "Legal Assistant",
          "Veterinary Technician",
          "Chef",
          "Customer Service Representative",
          "Occupational Health and Safety Specialist",
          "Pharmacy Technician",
          "Event Planner",
        ],
      ]
    }
  }
}
</script>