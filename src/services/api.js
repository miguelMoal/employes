import fetch from "node-fetch";

const _Fetch = (baseURL = "https://employes-test.herokuapp.com/api/") => {
  const headerJson = {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: "",
    "X-Requested-With": "XMLHttpRequest",
  };
  const headerFrom = {
    Authorization: "",
    "X-Requested-With": "XMLHttpRequest",
  };

  const cJsonByFormdata = (data, multiple = false) => {
    const names = Object.keys(data);
    const formData = new FormData();

    names.map((field) => {
      const getField = data[field];
      const isArrayFile =
        Array.isArray(getField) && getField.length && field == "files";
      const typeData = typeof getField;

      if (field !== "files") formData.append(field, getField);

      if (multiple && isArrayFile) {
        getField.map((file, index) =>
          formData.append(`files[]`, file, `imagen${index}.jpg`)
        );
      } else if (!multiple && isArrayFile) {
        formData.append(`file`, getField[0], `image.jpg`);
      }
    });
    return formData;
  };

  const request = async (URL, METHOD, DATA, FORM = false) => {
    const urlComplete = `${baseURL}${URL}`;
    const method = METHOD;
    const headers = !FORM ? headerJson : headerFrom;
    const body =
      DATA && !FORM
        ? JSON.stringify(DATA)
        : DATA && FORM
        ? cJsonByFormdata(DATA)
        : undefined;
    headers["Public-Key"] = "";
    return await fetch(urlComplete, {
      method,
      headers,
      body,
    });
  };

  const responseStatus = (response, resolve, reject) => {
    const data = response.json();
    if (response.ok) resolve(data);
    data.then(
      (s) => reject(s),
      (e) => reject(e)
    );
  };

  return {
    get: (url) => {
      return new Promise((resolve, reject) => {
        request(url, "GET")
          .then((response) => responseStatus(response, resolve, reject))
          .catch((error) => reject(error));
      });
    },

    post: (url, data) => {
      return new Promise((resolve, reject) => {
        request(url, "POST", data)
          .then((response) => responseStatus(response, resolve, reject))
          .catch((error) => reject(error));
      });
    },

    delete: (url) => {
      return new Promise((resolve, reject) => {
        request(url, "DELETE")
          .then((response) => responseStatus(response, resolve, reject))
          .catch((error) => reject(error));
      });
    },

    update: (url, data) => {
      return new Promise((resolve, reject) => {
        request(url, "PUT", data)
          .then((response) => responseStatus(response, resolve, reject))
          .catch((error) => reject(error));
      });
    },

    formData: (url, formData) => {
      return new Promise((resolve, reject) => {
        request(url, "POST", formData, true)
          .then((response) => responseStatus(response, resolve, reject))
          .catch((error) => reject(error));
      });
    },
  };
};

export default _Fetch;
