"""Generate the application CV from the reviewed content. Requires reportlab."""
import json
from pathlib import Path
from html import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/content/ponguinguiola-cv.json").read_text())
destination = ROOT / "public/ponguinguiola/cv-raul-zarza-ponguinguiola.pdf"
destination.parent.mkdir(parents=True, exist_ok=True)
green = colors.HexColor("#203c33")
gray = colors.HexColor("#44554b")
styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=25, leading=29, textColor=green, spaceAfter=5),
    "headline": ParagraphStyle("headline", fontName="Helvetica", fontSize=11, leading=15, textColor=green, spaceAfter=5),
    "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=8.5, leading=12, textColor=gray, spaceAfter=3),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=green, spaceBefore=7, spaceAfter=4),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=green, spaceAfter=2),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.4, leading=12.5, textColor=gray, spaceAfter=4),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.4, leading=12.5, textColor=gray, leftIndent=9, firstLineIndent=-9, spaceAfter=3),
}
story = []
def paragraph(text, style="body"):
    return Paragraph(text, styles[style])
def section(title):
    story.append(paragraph(title.upper(), "section"))

story.extend([
    paragraph(escape(data["name"]), "name"),
    paragraph(escape(data["headline"]), "headline"),
    paragraph(escape(data["application"]), "meta"),
    paragraph(escape(data["location"]), "meta"),
    paragraph(f'<link href="{data["whatsapp"]}" color="#203c33">WhatsApp: {data["phone"]}</link>  |  <link href="{data["website"]}" color="#203c33">raulzarza.com/ponguinguiola</link>', "meta"),
])
section("Perfil")
story.append(paragraph(escape(data["profile"])))
section("Experiencia relevante")
for experience in data["experience"]:
    block = [paragraph(escape(experience["title"]), "title"), paragraph(escape(experience["context"]), "meta")]
    block.extend(paragraph("- " + escape(item), "bullet") for item in experience["items"])
    block.append(Spacer(1, 3))
    story.append(KeepTogether(block))
section("Competencias")
story.append(paragraph(" · ".join(escape(item) for item in data["skills"])))
section("Formación")
for education in data["education"]:
    story.append(KeepTogether([paragraph(escape(education["title"]), "title"), paragraph(escape(education["detail"]))]))
section("Herramientas")
story.append(paragraph(escape(data["tools"])))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#cdd6ce"))
    canvas.line(18 * mm, 14 * mm, A4[0] - 18 * mm, 14 * mm)
    canvas.setFillColor(gray)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(18 * mm, 10 * mm, "Raúl Zarza | Postulación a Ponguinguiola A.C.")
    canvas.drawRightString(A4[0] - 18 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(str(destination), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
                        topMargin=17 * mm, bottomMargin=19 * mm, title="Raúl Zarza - CV para Ponguinguiola", author="Raúl Zarza")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(destination)
