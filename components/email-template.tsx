import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailProps>> = ({
  firstName,
  lastName,
  email,
  country,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Project Inquiry from {firstName} {lastName}</Preview>
    <Body style={{ backgroundColor: "#f6f9fc", fontFamily: "sans-serif" }}>
      <Container style={{ backgroundColor: "#ffffff", margin: "40px auto", padding: "32px", borderRadius: "12px", border: "1px solid #e4e4e7" }}>
        <Heading style={{ fontSize: "20px", fontWeight: "600", color: "#18181b", marginBottom: "8px" }}>
          🚀 New Project Inquiry — Build Vault
        </Heading>
        <Text style={{ fontSize: "14px", color: "#71717a" }}>
          You received a new inquiry through your portfolio contact form.
        </Text>
        <Hr style={{ borderColor: "#e4e4e7", margin: "20px 0" }} />

        <Section style={{ marginBottom: "16px" }}>
          <Text style={{ fontSize: "14px", margin: "4px 0" }}><strong>From:</strong> {firstName} {lastName}</Text>
          <Text style={{ fontSize: "14px", margin: "4px 0" }}><strong>Email:</strong> {email}</Text>
          <Text style={{ fontSize: "14px", margin: "4px 0" }}><strong>Country:</strong> {country || "Not specified"}</Text>
        </Section>

        <Hr style={{ borderColor: "#e4e4e7", margin: "20px 0" }} />

        <Section style={{ backgroundColor: "#f4f4f5", padding: "16px", borderRadius: "8px" }}>
          <Text style={{ fontSize: "13px", fontWeight: "600", color: "#3f3f46", margin: "0 0 8px 0" }}>Message:</Text>
          <Text style={{ fontSize: "14px", color: "#18181b", whiteSpace: "pre-wrap", margin: 0 }}>
            {message}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
