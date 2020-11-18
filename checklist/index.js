let val = ''
const checklist = (param) => {
    val = ''
    param.forEach(items => {
        val += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" ${(items.checked) ? 'checked' : ''}>
                    <label class="form-check-label" for="exampleRadios1">
                    ${items.text}
                    </label>
                </div>
      `
    })

    return val
}

module.exports = checklist