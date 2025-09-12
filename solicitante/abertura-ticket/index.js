const initialData = {
  about: [
    {
    },
  ],
};

const quill = new Quill('#editor', {
  modules: {
    toolbar: [
      ['bold', 'italic', 'image'],
    ],
  },
  theme: 'snow',
});

const form = document.querySelector('form');
form.addEventListener('formdata', (event) => {
    console.log(event)
    // Append Quill content before submitting
    var result = event.formData.append('about', JSON.stringify(quill.getContents().ops));
    console.log(result);
});