import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  _trap?: string; // honeypot anti-spam
  formType: "contact" | "demo";
  name: string;
  // Contact form
  email?: string;
  phone?: string;
  company?: string;
  type?: string;
  message?: string;
  // Demo form
  whatsapp?: string;
  agency?: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — si rempli, c'est un bot → silent success
  if (body._trap) {
    return NextResponse.json({ ok: true });
  }

  // Validation minimale
  if (!body.name?.trim()) {
    return NextResponse.json({ error: "Le nom est requis" }, { status: 400 });
  }

  if (body.formType === "contact" && !body.email?.trim()) {
    return NextResponse.json({ error: "L'email est requis" }, { status: 400 });
  }

  if (body.formType === "demo" && !body.whatsapp?.trim()) {
    return NextResponse.json(
      { error: "Le numéro WhatsApp est requis" },
      { status: 400 }
    );
  }

  // ─────────────────────────────────────────────────────────────
  // TODO: Brancher l'envoi d'email via Resend (recommandé)
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // await resend.emails.send({
  //   from: "Transport Facile <noreply@transport-facile.com>",
  //   to: [process.env.CONTACT_EMAIL ?? "contact@transport-facile.com"],
  //   subject: body.formType === "demo"
  //     ? `Demande de démo — ${body.name} (${body.agency})`
  //     : `Contact [${body.type}] — ${body.name} (${body.company})`,
  //   text: JSON.stringify(body, null, 2),
  // });
  // ─────────────────────────────────────────────────────────────

  // Log de développement (à retirer en production)
  if (process.env.NODE_ENV !== "production") {
    console.log("[API /api/contact]", body);
  }

  return NextResponse.json({ ok: true });
}
