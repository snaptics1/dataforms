"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';  // Import useRouter for navigation

export default function Uconsle({ Username }) {
  const router = useRouter();  // For redirecting after logout

  const initialFormData = {
    Username: Username || "", // Initialize Username with the prop passed from Cpanel
    sector: '',
    '2011_12': '',
    '2012_13': '',
    '2013_14': '',
    '2014_15': '',
    '2015_16': '',
    '2016_17': '',
    '2017_18': '',
    '2018_19': '',
    '2019_20': '',
    '2020_21_TRE': '',
    '2021_22_SRE': '',
    '2022_23_FRE': '',
    '2023_24_PE': ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === "Username") {
        updatedData.Email = value + "@dinjitgrid.com";
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = {
      Username: formData.Username,
      sector: formData.sector,
      '2011_12': formData['2011_12'],
      '2012_13': formData['2012_13'],
      '2013_14': formData['2013_14'],
      '2014_15': formData['2014_15'],
      '2015_16': formData['2015_16'],
      '2016_17': formData['2016_17'],
      '2017_18': formData['2017_18'],
      '2018_19': formData['2018_19'],
      '2019_20': formData['2019_20'],
      '2020_21_TRE': formData['2020_21_TRE'],
      '2021_22_SRE': formData['2021_22_SRE'],
      '2022_23_FRE': formData['2022_23_FRE'],
      '2023_24_PE': formData['2023_24_PE'],
    };

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSubmit),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!');
        console.log('Inserted ID:', result.insertedId);

        // Reset form after successful submission
        setFormData(initialFormData);
      } else {
        alert(`Error: ${result.message || result.error}`);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error submitting the form');
    }
  };

  const handleLogout = () => {
    // Clear the localStorage and navigate to the login page or home page
    localStorage.removeItem('role');
    localStorage.removeItem('Username');
    router.push('/'); // Or replace '/login' with the route you want to navigate to
  };

  return (
    <>


<div className="col-xl-12 text-end mt-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
      <form onSubmit={handleSubmit}>
        <div className="card custom-card">
          <div className="card-body">
            <div className="row gy-3">
              <div className="col-xl-6">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="Username"
                  value={formData.Username}
                  onChange={handleChange}
                  readOnly
                />
              </div>

              {/* Sector (Alphabets) */}
              <div className="col-xl-6">
                <label className="form-label">Sector</label>
                <input
                  type="text"
                  className="form-control"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                />
              </div>

              {/* 2011-12 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2011-12</label>
                <input
                  type="number"
                  className="form-control"
                  name="2011_12"
                  value={formData['2011_12']}
                  onChange={handleChange}
                />
              </div>

              {/* 2012-13 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2012-13</label>
                <input
                  type="number"
                  className="form-control"
                  name="2012_13"
                  value={formData['2012_13']}
                  onChange={handleChange}
                />
              </div>

              {/* 2013-14 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2013-14</label>
                <input
                  type="number"
                  className="form-control"
                  name="2013_14"
                  value={formData['2013_14']}
                  onChange={handleChange}
                />
              </div>

              {/* 2014-15 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2014-15</label>
                <input
                  type="number"
                  className="form-control"
                  name="2014_15"
                  value={formData['2014_15']}
                  onChange={handleChange}
                />
              </div>

              {/* 2015-16 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2015-16</label>
                <input
                  type="number"
                  className="form-control"
                  name="2015_16"
                  value={formData['2015_16']}
                  onChange={handleChange}
                />
              </div>

              {/* 2016-17 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2016-17</label>
                <input
                  type="number"
                  className="form-control"
                  name="2016_17"
                  value={formData['2016_17']}
                  onChange={handleChange}
                />
              </div>

              {/* 2017-18 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2017-18</label>
                <input
                  type="number"
                  className="form-control"
                  name="2017_18"
                  value={formData['2017_18']}
                  onChange={handleChange}
                />
              </div>

              {/* 2018-19 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2018-19</label>
                <input
                  type="number"
                  className="form-control"
                  name="2018_19"
                  value={formData['2018_19']}
                  onChange={handleChange}
                />
              </div>

              {/* 2019-20 (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2019-20</label>
                <input
                  type="number"
                  className="form-control"
                  name="2019_20"
                  value={formData['2019_20']}
                  onChange={handleChange}
                />
              </div>

              {/* 2020-21 (TRE) (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2020-21 (TRE)</label>
                <input
                  type="number"
                  className="form-control"
                  name="2020_21_TRE"
                  value={formData['2020_21_TRE']}
                  onChange={handleChange}
                />
              </div>

              {/* 2021-22 (SRE) (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2021-22 (SRE)</label>
                <input
                  type="number"
                  className="form-control"
                  name="2021_22_SRE"
                  value={formData['2021_22_SRE']}
                  onChange={handleChange}
                />
              </div>

              {/* 2022-23 (FRE) (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2022-23 (FRE)</label>
                <input
                  type="number"
                  className="form-control"
                  name="2022_23_FRE"
                  value={formData['2022_23_FRE']}
                  onChange={handleChange}
                />
              </div>

              {/* 2023-24 (PE) (Numeric) */}
              <div className="col-xl-6">
                <label className="form-label">2023-24 (PE)</label>
                <input
                  type="number"
                  className="form-control"
                  name="2023_24_PE"
                  value={formData['2023_24_PE']}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div className="col-xl-12 text-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

              {/* Logout Button */}
              
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
