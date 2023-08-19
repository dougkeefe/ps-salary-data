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
          <h2 className="text-xl font-semibold mb-2">Current Classifications Available</h2>
          <ul>
            <li><a href="/api/AC">AC</a></li>
            <li><a href="/api/AG">AG</a></li>
            <li><a href="/api/AI">AI</a></li>
            <li><a href="/api/AR">AR</a></li>
            <li><a href="/api/AS">AS</a></li>
            <li><a href="/api/AU">AU</a></li>
            <li><a href="/api/BI">BI</a></li>
            <li><a href="/api/CAI">CAI</a></li>
            <li><a href="/api/CH">CH</a></li>
            <li><a href="/api/CM">CM</a></li>
            <li><a href="/api/CO">CO</a></li>
            <li><a href="/api/CR">CR</a></li>
            <li><a href="/api/CS">CS</a></li>
            <li><a href="/api/CX">CX</a></li>
            <li><a href="/api/DA-CON">DA-CON</a></li>
            <li><a href="/api/DA-PRO">DA-PRO</a></li>
            <li><a href="/api/DD">DD</a></li>
            <li><a href="/api/DE">DE</a></li>
            <li><a href="/api/DS">DS</a></li>
            <li><a href="/api/EC">EC</a></li>
            <li><a href="/api/EDS">EDS</a></li>
            <li><a href="/api/EG">EG</a></li>
            <li><a href="/api/ETP">ETP</a></li>
            <li><a href="/api/EX">EX</a></li>
            <li><a href="/api/FB">FB</a></li>
            <li><a href="/api/FI">FI</a></li>
            <li><a href="/api/FO">FO</a></li>
            <li><a href="/api/FR">FR</a></li>
            <li><a href="/api/FS">FS</a></li>
            <li><a href="/api/GT">GT</a></li>
            <li><a href="/api/HPS">HPS</a></li>
            <li><a href="/api/HR">HR</a></li>
            <li><a href="/api/IS">IS</a></li>
            <li><a href="/api/LI">LI</a></li>
            <li><a href="/api/LS">LS</a></li>
            <li><a href="/api/MA">MA</a></li>
            <li><a href="/api/MD-MOF">MD-MOF</a></li>
            <li><a href="/api/MD-MSP">MD-MSP</a></li>
            <li><a href="/api/MT">MT</a></li>
            <li><a href="/api/ND-ADV">ND-ADV</a></li>
            <li><a href="/api/ND-DIT">ND-DIT</a></li>
            <li><a href="/api/ND-HME">ND-HME</a></li>
            <li><a href="/api/NU-EMA">NU-EMA</a></li>
            <li><a href="/api/OE-BEO">OE-BEO</a></li>
            <li><a href="/api/OE-CEO">OE-CEO</a></li>
            <li><a href="/api/OE-DEO">OE-DEO</a></li>
            <li><a href="/api/OE-MEO">OE-MEO</a></li>
            <li><a href="/api/OE-MSE">OE-MSE</a></li>
            <li><a href="/api/OM">OM</a></li>
            <li><a href="/api/PC">PC</a></li>
            <li><a href="/api/PE">PE</a></li>
            <li><a href="/api/PG">PG</a></li>
            <li><a href="/api/PH">PH</a></li>
            <li><a href="/api/PI">PI</a></li>
            <li><a href="/api/PM">PM</a></li>
            <li><a href="/api/PO-IMA">PO-IMA</a></li>
            <li><a href="/api/PO-TCO">PO-TCO</a></li>
            <li><a href="/api/PRS">PRS</a></li>
            <li><a href="/api/PS">PS</a></li>
            <li><a href="/api/PY">PY</a></li>
            <li><a href="/api/RO">RO</a></li>
            <li><a href="/api/SE-REM">SE-REM</a></li>
            <li><a href="/api/SE-RES">SE-RES</a></li>
            <li><a href="/api/SG-PAT">SG-PAT</a></li>
            <li><a href="/api/SG-SRE">SG-SRE</a></li>
            <li><a href="/api/SO-INS">SO-INS</a></li>
            <li><a href="/api/ST-COR">ST-COR</a></li>
            <li><a href="/api/ST-OCE">ST-OCE</a></li>
            <li><a href="/api/ST-SCY">ST-SCY</a></li>
            <li><a href="/api/ST-STN">ST-STN</a></li>
            <li><a href="/api/ST-TYP">ST-TYP</a></li>
            <li><a href="/api/SW-CHA">SW-CHA</a></li>
            <li><a href="/api/SW-SCW">SW-SCW</a></li>
            <li><a href="/api/TI">TI</a></li>
            <li><a href="/api/TR">TR</a></li>
            <li><a href="/api/UT">UT</a></li>
            <li><a href="/api/VM">VM</a></li>
            <li><a href="/api/WP">WP</a></li>
          </ul>


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
