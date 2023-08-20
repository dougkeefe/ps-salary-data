# Public Servant Salary Data API

This API provides access to public servant salary data for various classifications and levels. The information is sourced from [TBS-SCT Canada](https://www.tbs-sct.canada.ca/pubs_pol/hrpubs/coll_agre/rates-taux-eng.asp) and is available through a set of endpoints. More classifications will be added to the API soon.

## Important Disclaimer
This API and website are not affiliated with, endorsed, or sponsored by the Government of Canada.
The information provided is sourced from publicly available data and is provided for educational and informational purposes only.

## Endpoints

- `/api/data`: Returns the full JSON containing salary data for all classifications and levels.
- `/api/top`: Returns the top salary level for each classification and level.
- `/api/[classification-level]`: Returns the full salary information for a specific classification and level (e.g., `/api/cs-01`).
- `/api/[classification-level]/[step-#]`: Returns the salary for the specified step of a classification and level (e.g., `/api/cr-1/step-3`).
- `/api/[classification-level]/top`: Returns the top salary amount of the specified classification and level (e.g., `/api/as-4/top`).

## Usage

To use the API, send HTTP requests to the specified endpoints using your preferred method (e.g., cURL, Python requests, etc.).

### Examples

- Retrieve full salary data:
  ```shell
  curl https://your-api-url/api/data
  ```

- Get top salary levels:
  ```shell
  curl https://your-api-url/api/top
  ```

- Get full salary info for a classification and level:
  ```shell
  curl https://your-api-url/api/cs-01
  ```

- Get salary for a specific step:
  ```shell
  curl https://your-api-url/api/cr-1/step-3
  ```

- Get top salary amount for a classification and level:
  ```shell
  curl https://your-api-url/api/as-4/top
  ```

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```shell
   npm install
   ```

3. Run the API:
   ```shell
   npm start
   ```

## Current Classifications Available
- AC
- AG
- AI
- AR
- AS
- AU
- BI
- CAI
- CH
- CM
- CO
- CR
- CS
- CX
- DA-CON
- DA-PRO
- DD
- DE
- DS
- EC
- EDS
- EG
- ETP
- EX
- FB
- FI
- FO
- FR
- FS
- GT
- HPS
- HR
- IS
- LI
- LS
- MA
- MD-MOF
- MD-MSP
- MT
- ND-ADV
- ND-DIT
- ND-HME
- NU-EMA
- OE-BEO
- OE-CEO
- OE-DEO
- OE-MEO
- OE-MSE
- OM
- PC
- PE
- PG
- PH
- PI
- PM
- PO-IMA
- PO-TCO
- PRS
- PS
- PY
- RO
- SE-REM
- SE-RES
- SG-PAT
- SG-SRE
- SO-INS
- ST-COR
- ST-OCE
- ST-SCY
- ST-STN
- ST-TYP
- SW-CHA
- SW-SCW
- TI
- TR
- UT
- VM
- WP

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please submit an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).