function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name = "User Profile") {
  const userName = name?.concat(" Admin") ?? "User Profile";
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${userName?.split(" ")[0][0]}${userName?.split(" ")[1][0]}`,
  };
}

/**
 * Converts base64 image data to a File object.
 * @param {string} imageData - The base64 image data.
 * @returns {File} The File object representing the converted image.
 */
const convertToFileObject = (imageData) => {
  // Convert the base64 image data to a Blob object
  const byteCharacters = atob(imageData.split(",")[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: "image/jpeg" });

  // Create a File object from the Blob with a custom file name and type
  const fileName = "captured_image.jpg"; // You can set any file name you want
  const fileType = "image/jpeg"; // Adjust the file type based on your image format
  const file = new File([blob], fileName, { type: fileType });
  return file;
};

/**
 * Class to Format Date
 */
class DateWizard {
  /**
   * Function to format a date to the locale format.
   * @param {string} date - The date to format.
   * @returns {string} - The formatted date string.
   */
  static toLocaleDate = (date) => {
    const dateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", {
      ...dateOptions,
    });
  };

  /**
   * Function to format a date to the locale format.
   * @param {string} date - The date to format.
   * @returns {string} - The formatted date string.
   */
  static toLocaleDateTime = (date) => {
    const dateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", dateOptions);
  };
}

/**
 * Form Utility
 */
class FormWizard {
  /**
   *
   * @param {*} url The endpoint to post to.
   * @param {*} body The body of the request
   * @returns Response
   */
  static post = (url, body = null) => ({
    url,
    method: "POST",
    body,
  });

  /**
   *
   * @param {*} url The endpoint to post to.
   * @param {*} formData The form data to send to
   * @returns
   */
  static postFormData = (url, formData) => ({
    url,
    body: formData,
    method: "POST",
    formData: true,
  });
}

/**
 * Abstract implementation of the window.localStorage
 */
class LocalStorage {
  /**
   * This method saves an object to localstorage
   * @param {*} key The key which will be used to reference the object
   * @param {*} object The object to save.
   * @returns true if successful, else false.
   */
  static save(key, object) {
    try {
      localStorage.setItem(key, JSON.stringify(object));
      return true;
    } catch (error) {
      console.error("Error saving to local storage:", error);
      return false;
    }
  }

  /**
   * The load method returns the parsed object stored in the localstorage
   * @param {*} key The key used to save the object
   * @returns parsed object stored
   */
  static load(key) {
    try {
      const jsonString = localStorage.getItem(key);
      if (jsonString) {
        return JSON.parse(jsonString);
      }
      return null;
    } catch (error) {
      console.error("Error loading from local storage:", error);
      return null;
    }
  }

  /**
   * This method removes an object from the localstorage
   * @param {*} key The key to remove
   */
  static remove(key) {
    try {
      if (this.load(key)) {
        localStorage.removeItem(key);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}

export {
  DateWizard,
  FormWizard,
  LocalStorage,
  convertToFileObject,
  stringAvatar,
};
