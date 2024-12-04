<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "../../../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="container mx-auto p-6 max-w-6xl">
  <div class="bg-orange-50 shadow rounded-lg p-6">
    <h1
      class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3 md:mb-7 pb-1 md:text-3xl"
    >
      Shoe Information
    </h1>

    <!-- Current Status -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold">Current Status:</h2>
      <p class="text-red-600 font-bold text-lg">Disposed</p>
    </div>

    <!-- Usage Instructions -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold">Usage Instructions</h2>
      <div>
        <button
          type="button"
          class="w-full text-left bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
          data-collapse-toggle="usage-instructions"
        >
          View Instructions
        </button>
        <div
          class="hidden mt-2 bg-gray-50 border border-gray-200 p-4 rounded"
          id="usage-instructions"
        >
          <ul class="list-disc ml-6">
            <li>
              Ensure that footwear reaches shin height, covering any clothing
              articles.
            </li>
            <li>Use only on appropriate surfaces for optimal performance.</li>
            <li>Do not fully submerge in liquids.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Daily Care Instructions -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold">Daily Care Instructions</h2>
      <div>
        <button
          type="button"
          class="w-full text-left bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
          data-collapse-toggle="daily-care-instructions"
        >
          View Instructions
        </button>
        <div
          class="hidden mt-2 bg-gray-50 border border-gray-200 p-4 rounded"
          id="daily-care-instructions"
        >
          <ul class="list-disc ml-6">
            <li>Wipe with a damp cloth to remove dirt.</li>
            <li>Air dry in a shaded area after cleaning.</li>
            <li>Check for any potentially compromised areas.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Certification Labels -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold">Certification Labels</h2>
      <ul class="list-disc ml-6">
        <li>ISO 9001: Quality Management</li>
        <li>EcoCert: Sustainable Materials</li>
        <li>REACH Compliant</li>
      </ul>
    </div>

    <!-- Hazards -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold">Hazards</h2>
      <ul class="list-disc ml-6 text-red-600">
        <li>Flammable materials in extreme heat.</li>
        <li>Slippery on wet surfaces.</li>
      </ul>
    </div>

    <!-- Detailed Information -->
    <div>
      <h2 class="text-lg font-semibold">Detailed Information</h2>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table class="table-auto w-full bg-gray-50 border border-gray-200">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2 text-left">Category</th>
              <th class="px-4 py-2 text-left">Overview</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2"><a href="/">Production</a></td>
              <td class="px-4 py-2"
                >Manufactured in China using 70% recycled rubber.</td
              >
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2"><a href="/">Historical Data</a></td>
              <td class="px-4 py-2">Disposed of on 2022-05-20.</td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2"><a href="/">Lifecycle Status</a></td>
              <td class="px-4 py-2">Disposed.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script>
    document.querySelectorAll("[data-collapse-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-collapse-toggle")
        const target = document.getElementById(targetId)
        target.classList.toggle("hidden")
      })
    })
  </script>
</div>
