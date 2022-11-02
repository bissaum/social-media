const maskCelular = text => text
  .replace(/\D/g, '')
  .replace(/^(\d{2})(\d)/g, '$1 $2')
  .replace(/(\d)(\d{4})$/, '$1.$2')

window.onload = () => {
  const celular = document.querySelectorAll('input.celular')
  celular.forEach(item => {
    item.onkeyup = event => {
      const input = event.target
      item.value = maskCelular(input.value)
      if (item.value?.length > 0 && item.value?.length < 13) {
        input.classList.add('is-invalid')
      } else {
        input.classList.remove('is-invalid')
        if (item.value?.length === 13) {
          updates()
        }
      }
    }
  })

  const celular1 = document.querySelector('#celular-1')
  const celular2 = document.querySelector('#celular-2')
  const instagram = document.querySelector('#instagram')

  instagram.onkeyup = event => {
    const item = event.target.value
    if (item?.length <= 3) {
      instagram.classList.add('is-invalid')
    } else {
      updates()
      instagram.classList.remove('is-invalid')
    }
  }

  const updates = () => {
    updatePost()
    updateStory()
    updateSubmit()
  }

  const canvasPost = document.querySelector('#contatos-post')
  const updatePost = () => {
    const contextPost = canvasPost.getContext('2d')
    const imagePost = new Image()
    imagePost.src = 'images/contatos-post.png'
    imagePost.onload = () => {
      contextPost.drawImage(imagePost, 0, 0, 1080, 1080)
      contextPost.font = '48px Roboto'
      contextPost.fillStyle = '#666666'
      contextPost.fillText(celular1.value, 630, 915)
      contextPost.fillText(celular2.value, 130, 915)
      contextPost.font = '32px Roboto'
      contextPost.fillStyle = '#999999'
      contextPost.fillText(`@${instagram.value}`, 100, 1021)
    }
  }

  const canvasStory = document.querySelector('#contatos-story')
  const updateStory = () => {
    const contextStory = canvasStory.getContext('2d')
    const imageStory = new Image()
    imageStory.src = 'images/contatos-story.png'
    imageStory.onload = () => {
      contextStory.drawImage(imageStory, 0, 0, 1080, 1920)
      contextStory.font = '48px Roboto'
      contextStory.fillStyle = '#666666'
      contextStory.fillText(celular1.value, 630, 1635)
      contextStory.fillText(celular2.value, 130, 1635)
      contextStory.font = '32px Roboto'
      contextStory.fillStyle = '#999999'
      contextStory.fillText(`@${instagram.value}`, 130, 1760)
    }
  }

  const downloadPost = document.querySelector('#download-post')
  downloadPost.onclick = () => {
    const linkPost = link = document.createElement('a')
    linkPost.download = 'contatos-post.png'
    linkPost.href = canvasPost.toDataURL()
    linkPost.click()
  }

  const downloadStory = document.querySelector('#download-story')
  downloadStory.onclick = () => {
    const linkStory = link = document.createElement('a')
    linkStory.download = 'contatos-story.png'
    linkStory.href = canvasStory.toDataURL()
    linkStory.click()
  }

  const submitButton = document.querySelectorAll('.submit button')
  const updateSubmit = () => {
    submitButton.forEach(item => {
      const hasInvalid = document.querySelectorAll('.is-invalid')
      item.disabled = hasInvalid?.length > 0
    })
  }
}