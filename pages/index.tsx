import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 font-inter">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Public Servant Salary Data API</h1>
        <p className="mb-6">
          This API provides access to publicly accessible salary information based on classifications and levels.
          The information is sourced from{' '}
          <a
            href="https://www.tbs-sct.canada.ca/pubs_pol/hrpubs/coll_agre/rates-taux-eng.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            TBS-SCT Canada
          </a>{' '}
          and is available through a set of endpoints.
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
            <li>
              <code>/api/[classification-level]/current</code>: Returns the current salary steps of the specified classification
              and level (e.g., <code>/api/as-4/current</code>).
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

  # Get current salary steps for a classification and level
  curl https://ps-salary-data.vercel.app/api/as-4/current
`}
              </code>
            </pre>
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Current Classifications Available</h2>
          <ul>
            <li><Link href="/api/AC">AC</Link></li>
            <li><Link href="/api/AG">AG</Link></li>
            <li><Link href="/api/AI">AI</Link></li>
            <li><Link href="/api/AR">AR</Link></li>
            <li><Link href="/api/AS">AS</Link></li>
            <li><Link href="/api/AU">AU</Link></li>
            <li><Link href="/api/BI">BI</Link></li>
            <li><Link href="/api/CAI">CAI</Link></li>
            <li><Link href="/api/CH">CH</Link></li>
            <li><Link href="/api/CM">CM</Link></li>
            <li><Link href="/api/CO">CO</Link></li>
            <li><Link href="/api/CR">CR</Link></li>
            <li><Link href="/api/CS">CS</Link></li>
            <li><Link href="/api/CX">CX</Link></li>
            <li><Link href="/api/DA-CON">DA-CON</Link></li>
            <li><Link href="/api/DA-PRO">DA-PRO</Link></li>
            <li><Link href="/api/DD">DD</Link></li>
            <li><Link href="/api/DE">DE</Link></li>
            <li><Link href="/api/DS">DS</Link></li>
            <li><Link href="/api/EC">EC</Link></li>
            <li><Link href="/api/EDS">EDS</Link></li>
            <li><Link href="/api/EG">EG</Link></li>
            <li><Link href="/api/ETP">ETP</Link></li>
            <li><Link href="/api/EX">EX</Link></li>
            <li><Link href="/api/FB">FB</Link></li>
            <li><Link href="/api/FI">FI</Link></li>
            <li><Link href="/api/FO">FO</Link></li>
            <li><Link href="/api/FR">FR</Link></li>
            <li><Link href="/api/FS">FS</Link></li>
            <li><Link href="/api/GT">GT</Link></li>
            <li><Link href="/api/HPS">HPS</Link></li>
            <li><Link href="/api/HR">HR</Link></li>
            <li><Link href="/api/IS">IS</Link></li>
            <li><Link href="/api/IT">IT</Link></li>
            <li><Link href="/api/LI">LI</Link></li>
            <li><Link href="/api/LS">LS</Link></li>
            <li><Link href="/api/MA">MA</Link></li>
            <li><Link href="/api/MD-MOF">MD-MOF</Link></li>
            <li><Link href="/api/MD-MSP">MD-MSP</Link></li>
            <li><Link href="/api/MT">MT</Link></li>
            <li><Link href="/api/ND-ADV">ND-ADV</Link></li>
            <li><Link href="/api/ND-DIT">ND-DIT</Link></li>
            <li><Link href="/api/ND-HME">ND-HME</Link></li>
            <li><Link href="/api/NU-EMA">NU-EMA</Link></li>
            <li><Link href="/api/OE-BEO">OE-BEO</Link></li>
            <li><Link href="/api/OE-CEO">OE-CEO</Link></li>
            <li><Link href="/api/OE-DEO">OE-DEO</Link></li>
            <li><Link href="/api/OE-MEO">OE-MEO</Link></li>
            <li><Link href="/api/OE-MSE">OE-MSE</Link></li>
            <li><Link href="/api/OM">OM</Link></li>
            <li><Link href="/api/PC">PC</Link></li>
            <li><Link href="/api/PE">PE</Link></li>
            <li><Link href="/api/PG">PG</Link></li>
            <li><Link href="/api/PH">PH</Link></li>
            <li><Link href="/api/PI">PI</Link></li>
            <li><Link href="/api/PM">PM</Link></li>
            <li><Link href="/api/PO-IMA">PO-IMA</Link></li>
            <li><Link href="/api/PO-TCO">PO-TCO</Link></li>
            <li><Link href="/api/PRS">PRS</Link></li>
            <li><Link href="/api/PS">PS</Link></li>
            <li><Link href="/api/PY">PY</Link></li>
            <li><Link href="/api/RO">RO</Link></li>
            <li><Link href="/api/SE-REM">SE-REM</Link></li>
            <li><Link href="/api/SE-RES">SE-RES</Link></li>
            <li><Link href="/api/SG-PAT">SG-PAT</Link></li>
            <li><Link href="/api/SG-SRE">SG-SRE</Link></li>
            <li><Link href="/api/SO-INS">SO-INS</Link></li>
            <li><Link href="/api/ST-COR">ST-COR</Link></li>
            <li><Link href="/api/ST-OCE">ST-OCE</Link></li>
            <li><Link href="/api/ST-SCY">ST-SCY</Link></li>
            <li><Link href="/api/ST-STN">ST-STN</Link></li>
            <li><Link href="/api/ST-TYP">ST-TYP</Link></li>
            <li><Link href="/api/SW-CHA">SW-CHA</Link></li>
            <li><Link href="/api/SW-SCW">SW-SCW</Link></li>
            <li><Link href="/api/TI">TI</Link></li>
            <li><Link href="/api/TR">TR</Link></li>
            <li><Link href="/api/UT">UT</Link></li>
            <li><Link href="/api/VM">VM</Link></li>
            <li><Link href="/api/WP">WP</Link></li>
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
