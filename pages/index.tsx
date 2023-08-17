import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 font-inter">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Public Servant Salary Data API</h1>
        <p className="mb-6">
          This API provides access to public servant salary data for various classifications and levels.
          The information is sourced from{' '}
          <a
            href="https://www.tbs-sct.canada.ca/pubs_pol/hrpubs/coll_agre/rates-taux-eng.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            TBS-SCT Canada
          </a>{' '}
          and is available through a set of endpoints. More classifications will be added to the API soon.
        </p>

        <section className='mb-8'>
          <h2 className="text-xl font-semibold mb-2">Important Disclaimer</h2>
          <p>
            This API and website are not affiliated with, endorsed, or sponsored by the Government of Canada.
            The information provided is sourced from publicly available data and is provided for educational and informational purposes only.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Endpoints</h2>
          <ul className="list-disc pl-6">
            <li>
              <code>/api/data</code>: Returns the full JSON containing salary data for all classifications and levels.
            </li>
            <li>
              <code>/api/top</code>: Returns the top salary level for each classification and level.
            </li>
            <li>
              <code>/api/[classification-level]</code>: Returns the full salary information for a specific classification
              and level (e.g., <code>/api/cs-01</code>).
            </li>
            <li>
              <code>/api/[classification-level]/[step-#]</code>: Returns the salary for the specified step of a
              classification and level (e.g., <code>/api/cr-1/step-3</code>).
            </li>
            <li>
              <code>/api/[classification-level]/top</code>: Returns the top salary amount of the specified classification
              and level (e.g., <code>/api/as-4/top</code>).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Usage</h2>
          <p>
            To use the API, send HTTP requests to the specified endpoints using your preferred method (e.g., cURL, Python
            requests, etc.).
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Examples</h3>
          <p className="mb-4">
            Here are some example HTTP requests you can use to interact with the API:
          </p>
          <div className="rounded-md p-4">
            <pre>
              <code>
                {`  # Retrieve full salary data
  curl https://ps-salary-data.vercel.app/api/data

  # Get top salary levels
  curl https://ps-salary-data.vercel.app/api/top

  # Get full salary info for a classification and level
  curl https://ps-salary-data.vercel.app/api/cs-01

  # Get salary for a specific step
  curl https://ps-salary-data.vercel.app/api/cr-1/step-3

  # Get top salary amount for a classification and level
  curl https://ps-salary-data.vercel.app/api/as-4/top
`}
              </code>
            </pre>
          </div>
        </section>



        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contributing</h2>
          <p>
            Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please submit an issue or
            a pull request on the <a href="https://github.com/dougkeefe/ps-salary-data" className="text-blue-500">GitHub repository</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">License</h2>
          <p>
            This project is licensed under the{' '}
            <a href="https://github.com/dougkeefe/ps-salary-data/blob/main/LICENSE" className="text-blue-500">
              MIT License
            </a>
            .
          </p>
        </section>
      </div>

      <footer className="max-w-3xl mx-auto text-gray-500">
        <hr className="mb-4" />
        <p>    This API and website are not affiliated with, endorsed, or sponsored by the Government of Canada. <br />
          The information provided is sourced from publicly available data and is provided for educational and informational purposes only.
        </p>
        <p className="mt-4">Author: Doug Keefe 2023</p>
      </footer>
    </main>
  );
}
